import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Tag extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('tag');
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
}
