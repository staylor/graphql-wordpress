import { toGlobalId } from 'graphql-relay';
import fetchData from 'data/utils';

class Post {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_POSTS_ENDPOINT || 'graphql/v1/posts';
  }

  static async collection(args = {}) {
    const { data: { body, headers } } = await fetchData(Post.getEndpoint(), {
      qs: args,
    });
    return {
      total: headers['x-wp-total'],
      items: body.map(item => Object.assign(new Post(), item)),
    };
  }
}

export default Post;
