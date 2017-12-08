import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';
import slugify from '../utils/slugify';

export default class Post {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('post');
    this.tags = context.db.collection('tag');
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
    this.tagLoader = new DataLoader(ids => findByIds(this.tags, ids));
  }

  findTags(tags) {
    return this.tagLoader.loadMany(tags);
  }

  findOneById(id) {
    return this.loader.load(id);
  }

  findOneBySlug(slug) {
    return this.collection.findOne({
      slug,
    });
  }

  count(args = {}) {
    const criteria = Object.assign({}, args);
    delete criteria.search;
    if (args.search) {
      criteria.$text = { $search: args.search };
    }
    return this.collection.find(criteria).count();
  }

  all({ limit = 10, offset = 0, search = null }) {
    const criteria = {};
    if (search) {
      criteria.$text = { $search: search };
    }

    return this.collection
      .find(criteria)
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray();
  }

  async insert(doc) {
    const slug = slugify(doc.title);
    const docToInsert = Object.assign({}, doc, {
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    if (!docToInsert.tags) {
      docToInsert.tags = [];
    }
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }

  async updateById(id, doc) {
    const docToUpdate = Object.assign({}, doc);
    const ret = await this.collection.update(
      { _id: id },
      {
        $set: Object.assign({}, docToUpdate, {
          updatedAt: Date.now(),
        }),
      }
    );
    this.loader.clear(id);
    return ret;
  }

  async removeById(id) {
    const ret = this.collection.remove({ _id: id });
    this.loader.clear(id);
    return ret;
  }
}
