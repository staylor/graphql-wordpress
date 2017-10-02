import { toGlobalId } from 'graphql-relay';

class NavMenu {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_NAV_MENUS_ENDPOINT || 'graphql/v1/nav-menus';
  }
}

export default NavMenu;
