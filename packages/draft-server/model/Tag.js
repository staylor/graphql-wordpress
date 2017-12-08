import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';
import { getUniqueSlug } from './utils';

export default class Tag {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('tag');
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    return this.loader.load(id);
  }

  count(args = {}) {
    const criteria = Object.assign({}, args);
    delete criteria.search;
    if (args.search) {
      criteria.$text = { $search: args.search };
    }
    return this.collection.find(criteria).count();
  }

  all({ limit = 10, offset = 0, taxonomy = null, search = null }) {
    const criteria = {};
    if (taxonomy) {
      criteria.taxonomy = taxonomy;
    }
    if (search) {
      criteria.$text = { $search: search };
    }

    return this.collection
      .find(criteria)
      .sort({ name: 1 })
      .skip(offset)
      .limit(limit)
      .toArray();
  }

  async insert(doc) {
    const slug = await getUniqueSlug(this.collection, doc.name);
    const docToInsert = Object.assign({}, doc, {
      _id: slug,
      slug,
      taxonomy: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
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
