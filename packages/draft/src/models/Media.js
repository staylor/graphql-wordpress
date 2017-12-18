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
}
