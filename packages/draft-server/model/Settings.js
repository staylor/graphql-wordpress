import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';

export default class Settings {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('settings');
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    return this.loader.load(id);
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
}
