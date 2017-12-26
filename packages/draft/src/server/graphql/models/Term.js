import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Term extends Model {
  constructor(context) {
    super(context);

    this.taxonomyCollection = context.db.collection('taxonomy');
    this.collection = context.db.collection('term');
  }

  findTaxonomyBySlug(slug) {
    return this.taxonomyCollection.findOne({ slug });
  }

  findByTermTaxonomy(slug, taxonomy) {
    return this.collection.find({ slug, taxonomy });
  }

  async count(args = {}) {
    const criteria = Object.assign({}, args);
    if (criteria.taxonomy) {
      const id = (await this.findTaxonomyBySlug(criteria.taxonomy))._id;
      criteria.taxonomy = id;
    } else if (criteria.taxonomyId) {
      criteria.taxonomy = criteria.taxonomyId;
      delete criteria.taxonomyId;
    }
    delete criteria.search;
    if (args.search) {
      criteria.$text = { $search: args.search };
    }
    return this.collection.find(criteria).count();
  }

  async all({ limit = 10, offset = 0, taxonomyId = null, taxonomy = null, search = null }) {
    const criteria = {};
    if (taxonomy) {
      const id = (await this.findTaxonomyBySlug(taxonomy))._id;
      criteria.taxonomy = id;
    } else if (taxonomyId) {
      criteria.taxonomy = taxonomyId;
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
      slug,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }
}
