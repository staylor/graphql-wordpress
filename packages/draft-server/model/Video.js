import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';
import slugify from '../utils/slugify';

export default class Video {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('video');
    this.tags = context.db.collection('tag');
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
    this.tagLoader = new DataLoader(ids => findByIds(this.tags, ids));
  }

  findTags(tags) {
    return this.tagLoader.loadMany(tags);
  }

  findOneById(id) {
    return this.loader.load(id);
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
        const slug = slugify(tag.trim());
        return new Promise((resolve, reject) => {
          this.tags.update(
            { _id: slug },
            {
              $set: {
                name: tag,
                slug,
              },
              $setOnInsert: {
                _id: slug,
              },
            },
            { upsert: true },
            updateErr => {
              if (updateErr) {
                reject(updateErr);
              } else {
                resolve(slug);
              }
            }
          );
        });
      })
    );
  }

  async insert(doc) {
    const docToInsert = Object.assign({}, doc, {
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    if (!docToInsert.slug) {
      docToInsert.slug = slugify(docToInsert.title);
    }
    if (!docToInsert.tags) {
      docToInsert.tags = [];
    }
    const tags = await this.createTags(docToInsert.tags);
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

  async removeById(id) {
    const ret = this.collection.remove({ _id: id });
    this.loader.clear(id);
    return ret;
  }
}
