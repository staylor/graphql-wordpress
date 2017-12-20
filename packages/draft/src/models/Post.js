import Model from './Model';
import { getUniqueSlug } from './utils';

function convertEntityData(entityMap) {
  return entityMap.map(entity => {
    const e = Object.assign({}, entity);
    if (e.data.type === 'EMBED') {
      delete e.data.href;
      delete e.data.target;
    } else if (e.data.type === 'LINK') {
      delete e.data.url;
      delete e.data.html;
    }
    return e;
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
