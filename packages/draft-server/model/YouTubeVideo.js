import DataLoader from 'dataloader';
import findByIds from 'mongo-find-by-ids';

export default class YouTubeVideo {
  constructor(context) {
    this.context = context;
    this.collection = context.db.collection('youTubeVideo');
    this.pubsub = context.pubsub;
    this.loader = new DataLoader(ids => findByIds(this.collection, ids));
  }

  findOneById(id) {
    return this.loader.load(id);
  }

  all({ limit = 10 }) {
    return this.collection
      .find({})
      .sort({ createdAt: 1 })
      .limit(limit)
      .toArray();
  }

  thumbnails(youTubeVideo) {
    return this.context.YouTubeThumbnails.findOneById(youTubeVideo.thumbnailsId);
  }

  async insert(doc) {
    const docToInsert = Object.assign({}, doc, {
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    const id = (await this.collection.insertOne(docToInsert)).insertedId;
    this.pubsub.publish('youTubeVideoInserted', await this.findOneById(id));
    return id;
  }

  async updateById(id, doc) {
    const ret = await this.collection.update(
      { _id: id },
      {
        $set: Object.assign({}, doc, {
          updatedAt: Date.now(),
        }),
      }
    );
    this.loader.clear(id);
    this.pubsub.publish('youTubeVideoUpdated', await this.findOneById(id));
    return ret;
  }

  async removeById(id) {
    const ret = this.collection.remove({ _id: id });
    this.loader.clear(id);
    this.pubsub.publish('youTubeVideoRemoved', id);
    return ret;
  }
}
