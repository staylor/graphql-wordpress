import { toGlobalId } from 'graphql-relay';

class Tag {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_TAGS_ENDPOINT || 'wp/v2/tags';
  }
}

export default Tag;
