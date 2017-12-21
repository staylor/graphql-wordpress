import { ObjectId } from 'mongodb';
import Model from './Model';
import { getUniqueSlug } from './utils';

function convertEntityData(entityMap) {
  return entityMap.map(entity => {
    const normalized = {};
    if (entity.data.type === 'EMBED') {
      const { type, url, html } = entity.data;
      normalized.data = { type, url, html };
    } else if (entity.data.type === 'LINK') {
      const { type, href, target } = entity.data;
      normalized.data = { type, href, target };
    } else if (entity.data.type === 'IMAGE') {
      const { type, id, size } = entity.data;
      normalized.data = { type, id, size };
      normalized.data.id = ObjectId(id);
    } else if (entity.data.type === 'VIDEO') {
      const { type, id } = entity.data;
      normalized.data = { type, id };
      normalized.data.id = ObjectId(id);
    } else {
      normalized.data = entity.data;
    }
    const { type, mutability } = entity;
    normalized.type = type;
    normalized.mutability = mutability;
    return normalized;
  });
}

export default class Post extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('post');
  }

  all({ limit = 10, offset = 0, search = null }) {
    const criteria = {};
    if (search) {
      criteria.$text = { $search: search };
    }

    return this.collection
      .find(criteria)
      .sort({ createdAt: -1 })
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
    docToInsert.contentState.entityMap = convertEntityData(docToInsert.contentState.entityMap);
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    return id;
  }

  async updateById(id, doc) {
    const docToUpdate = Object.assign({}, doc);
    docToUpdate.contentState.entityMap = convertEntityData(docToUpdate.contentState.entityMap);
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
