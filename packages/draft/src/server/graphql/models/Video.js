import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Video extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('video');
  }

  all({ limit = 10, offset = 0, year = null, search = null }) {
    const criteria = {};
    if (year) {
      criteria.year = parseInt(year, 10);
    }
    if (search) {
      criteria.$text = { $search: search };
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
    docToInsert.slug = await getUniqueSlug(this.collection, docToInsert.title);
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }
}
