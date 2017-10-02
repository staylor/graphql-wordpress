import { toGlobalId } from 'graphql-relay';

class Sidebar {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_SIDEBARS_ENDPOINT || 'graphql/v1/sidebars';
  }
}

export default Sidebar;
