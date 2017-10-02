import { toGlobalId } from 'graphql-relay';

class User {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_USERS_ENDPOINT || 'wp/v2/users';
  }
}

export default User;
