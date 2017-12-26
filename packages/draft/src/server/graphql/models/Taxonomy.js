import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Taxonomy extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('taxonomy');
  }

  all() {
    return this.collection
      .find({})
      .sort({ name: 1 })
      .toArray();
  }

  async insert(doc) {
    const slug = await getUniqueSlug(this.collection, doc.name);
    const docToInsert = Object.assign({}, doc, {
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }
}
