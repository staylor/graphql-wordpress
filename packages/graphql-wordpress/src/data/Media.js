import { toGlobalId } from 'graphql-relay';

class Media {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_MEDIA_ENDPOINT || 'wp/v2/media';
  }
}

export default Media;
