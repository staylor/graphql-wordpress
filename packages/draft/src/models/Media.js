import fs from 'fs';
import path from 'path';
import Model from './Model';

export default class Media extends Model {
  constructor(context) {
    super(context);

    this.collection = context.db.collection('media');
  }

  all({ limit = 10, offset = 0, type = null, mimeType = null, search = null }) {
    const criteria = {};
    if (type) {
      criteria.type = type;
    }
    if (mimeType) {
      criteria.mimeType = mimeType;
    }
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

  async removeById(id) {
    const media = await this.loader.load(id);
    const ret = this.collection.remove({ _id: id });
    this.loader.clear(id);
    const uploadsDir = path.resolve(path.join(__dirname, '../uploads', media.destination));
    if (media.type === 'image' && media.crops.length > 0) {
      media.crops.forEach(crop => {
        fs.unlinkSync(`${uploadsDir}/${crop.fileName}`);
      });
    } else if (media.type === 'audio' && media.images.length > 0) {
      media.images.forEach(image => {
        fs.unlinkSync(`${uploadsDir}/${image.fileName}`);
      });
    }
    fs.unlinkSync(`${uploadsDir}/${media.fileName}`);
    return ret;
  }
}
