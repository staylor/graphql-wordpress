import Model from './Model';

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
}
