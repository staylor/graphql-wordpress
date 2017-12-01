import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';

export default class Video {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('video');
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    return this.loader.load(id);
  }

  findOneBySlug(slug) {
    return this.collection.findOne({
      slug,
    });
  }

  count(criteria = {}) {
    return this.collection.find(criteria).count();
  }

  all({ limit = 10, offset = 0, year = null }) {
    const criteria = {};
    if (year) {
      criteria.year = parseInt(year, 10);
    }

    return this.collection
      .find(criteria)
      .sort({ year: -1, publishedAt: -1 })
      .skip(offset)
      .limit(limit)
      .toArray();
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
    const ret = await this.collection.update(
      { _id: id },
      {
        $set: Object.assign({}, doc, {
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
