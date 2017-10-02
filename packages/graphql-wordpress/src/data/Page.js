import { toGlobalId } from 'graphql-relay';

class Page {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_PAGES_ENDPOINT || 'graphql/v1/pages';
  }
}

export default Page;
