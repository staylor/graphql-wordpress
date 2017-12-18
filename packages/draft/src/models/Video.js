import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';
import Model from './Model';
import { getUniqueSlug } from './utils';

export default class Video extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('video');
    this.tags = context.db.collection('tag');
    this.tagLoader = new DataLoader(ids => findByIds(this.tags, ids));
  }

  findTags(tags) {
    return this.tagLoader.loadMany(tags);
  }

  findOneBySlug(slug) {
    return this.collection.findOne({
      slug,
    });
  }

  all({ limit = 10, offset = 0, year = null, tags = null, search = null }) {
    const criteria = {};
    if (tags) {
      criteria.tags = tags;
    }
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

  async createTags(tags = []) {
    return Promise.all(
      tags.map(tag => {
        const name = tag.trim();
        return new Promise(async (resolve, reject) => {
          const found = await this.tags.findOne({ name });
          if (found) {
            resolve(found.slug);
          } else {
            try {
              const slug = await getUniqueSlug(this.tags, name);
              await this.tags.insertOne({
                _id: slug,
                slug,
                name,
              });
              resolve(slug);
            } catch (e) {
              reject(e);
            }
          }
        });
      })
    );
  }

  async insert(doc) {
    const docToInsert = Object.assign({}, doc, {
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    docToInsert.slug = await getUniqueSlug(this.collection, docToInsert.title);
    let tags;
    if (!docToInsert.tags) {
      tags = [];
    } else {
      tags = await this.createTags(docToInsert.tags);
    }
    docToInsert.tags = tags;
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }

  async updateById(id, doc) {
    const docToUpdate = Object.assign({}, doc);
    if (!docToUpdate.tags) {
      docToUpdate.tags = [];
    }
    const tags = await this.createTags(docToUpdate.tags);
    docToUpdate.tags = tags;
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
