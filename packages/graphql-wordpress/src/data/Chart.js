import { toGlobalId } from 'graphql-relay';

class Chart {
  getID() {
    return toGlobalId(this.constructor.name, 'me');
  }

  static getEndpoint() {
    return 'https://itunes.apple.com/us/rss/topalbums/limit=25/explicit=true/json';
  }
}

export default Chart;
