import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Show extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('show');
  }

  async all({ limit = 10, offset = 0, artist = null, venue = null, search = null }) {
    const criteria = {};
    if (artist) {
      criteria.artist = artist;
    }
    if (venue) {
      criteria.venue = venue;
    }
    if (search) {
      criteria.$text = { $search: search };
    }

    return this.collection
      .find(criteria)
      .sort({ date: 1 })
      .skip(offset)
      .limit(limit)
      .toArray();
  }

  async insert(doc) {
    const slug = await getUniqueSlug(this.collection, doc.title);
    const docToInsert = Object.assign({}, doc, {
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }
}
