import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';

export default class Model {
  constructor(context) {
    this.context = context;
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    return this.loader.load(id);
  }

  findByIds(ids) {
    return this.loader.loadMany(ids);
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

  async insert(doc) {
    const docToInsert = Object.assign({}, doc, {
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
