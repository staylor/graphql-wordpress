import { parseConnection } from './utils/collection';

const resolvers = {
  Post: {
    id(post) {
      return post._id;
    },
    featuredMedia(post, args, { Media }) {
      return Media.findByIds(post.featuredMedia || []);
    },
  },
  Query: {
    async posts(root, args, { Post, authUser }) {
      const connectionArgs = Object.assign({}, args);
      const userCanSee = authUser && authUser.roles.includes('admin');
      if (!userCanSee) {
        connectionArgs.status = 'PUBLISH';
      }
      return parseConnection(Post, connectionArgs);
    },

    async post(root, { id, slug }, { Post, authUser }) {
      let post;
      if (id) {
        post = await Post.findOneById(id);
      } else {
        post = await Post.findOneBySlug(slug);
      }

      const userCanSee = authUser && authUser.roles.includes('admin');
      if (post.status === 'DRAFT' && !userCanSee) {
        throw new Error('You do not have permission');
      }

      return post;
    },
  },
  Mutation: {
    async createPost(root, { input }, { Post }) {
      const id = await Post.insert(input);
      return Post.findOneById(id);
    },

    async updatePost(root, { id, input }, { Post }) {
      await Post.updateById(id, input);
      return Post.findOneById(id);
    },

    removePost(root, { ids }, { Post }) {
      return Promise.all(ids.map(id => Post.removeById(id)));
    },
  },
};

export default resolvers;
