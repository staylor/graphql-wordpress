import { toGlobalId } from 'graphql-relay';

class Settings {
  getID() {
    return toGlobalId(this.constructor.name, 'me');
  }

  static getEndpoint() {
    return process.env.WP_SETTINGS_ENDPOINT || 'graphql/v1/settings';
  }
}

export default Settings;
