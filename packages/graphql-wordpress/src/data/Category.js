import { toGlobalId } from 'graphql-relay';

class Category {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_CATEGORIES_ENDPOINT || 'wp/v2/categories';
  }
}

export default Category;
