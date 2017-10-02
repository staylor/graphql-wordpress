import path from 'path';
import { toGlobalId } from 'graphql-relay';
import fetchData, { clearEndpointCache } from 'data/utils';
import Post from 'data/Post';

class Comment {
  getID() {
    return toGlobalId(this.constructor.name, this.id);
  }

  static getEndpoint() {
    return process.env.WP_COMMENTS_ENDPOINT || 'graphql/v1/comments';
  }

  static clearCaches() {
    // Dataloader API calls are non-deterministic
    return Promise.all([
      clearEndpointCache(Post.getEndpoint()),
      clearEndpointCache(Comment.getEndpoint()),
    ]);
  }

  static async collection(opts = {}) {
    const args = { qs: opts };
    const { data: { body, headers } } = await fetchData(Comment.getEndpoint(), args);
    return {
      total: headers['x-wp-total'],
      items: body.map(item => Object.assign(new Comment(), item)),
    };
  }

  static async create(form) {
    if (!form.author && !(form.authorEmail && form.authorName)) {
      return Promise.reject('You must provide author data to create a comment.');
    }

    if (!form.post) {
      return Promise.reject('You must provide a post to assign the comment to.');
    }

    try {
      const { data: { body: comment, headers } } = await fetchData(Comment.getEndpoint(), {
        method: 'POST',
        form,
      });

      if (comment) {
        await Comment.clearCaches();
        return {
          status: 'new',
          comment: Object.assign(new Comment(), comment),
          cookies: headers['set-cookie'],
        };
      }

      return {
        comment: null,
        status: 'new',
        cookies: null,
      };
    } catch (e) {
      return {
        comment: null,
        status: e.message,
        cookies: null,
      };
    }
  }

  static async update(input) {
    const form = Object.assign({}, input);
    const updateEndpoint = path.join(Comment.getEndpoint(), String(form.id));
    delete form.id;

    try {
      const { data: { body: comment, headers } } = await fetchData(updateEndpoint, {
        method: 'POST',
        form,
      });

      if (comment) {
        await Comment.clearCaches();
        return {
          status: 'update',
          comment: Object.assign(new Comment(), comment),
          cookies: headers['set-cookie'],
        };
      }

      return {
        comment: null,
        status: 'update',
        cookies: null,
      };
    } catch (e) {
      return {
        comment: null,
        status: e.message,
        cookies: null,
      };
    }
  }

  static async delete(input) {
    const form = Object.assign({}, input);
    const deleteEndpoint = path.join(Comment.getEndpoint(), String(form.id));

    try {
      const { data: { body: comment } } = await fetchData(deleteEndpoint, {
        method: 'DELETE',
        form,
      });

      if (comment && comment.status === 'trash') {
        await Comment.clearCaches();
        return {
          status: 'delete',
        };
      }

      return {
        status: 'unknown',
      };
    } catch (e) {
      return {
        status: e.message,
      };
    }
  }
}

export default Comment;
