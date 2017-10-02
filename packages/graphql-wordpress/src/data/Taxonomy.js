import { toGlobalId } from 'graphql-relay';

class Taxonomy {
  getID() {
    return toGlobalId(this.constructor.name, this.slug);
  }

  static getEndpoint() {
    return process.env.WP_TAXONOMIES_ENDPOINT || 'graphql/v1/taxonomies';
  }
}

export default Taxonomy;
