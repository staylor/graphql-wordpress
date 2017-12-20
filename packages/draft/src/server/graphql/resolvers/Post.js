import { parseConnection } from './utils/collection';

const resolvers = {
  Post: {
    id(post) {
      return post._id;
    },
  },
  Query: {
    async posts(root, args, { Post }) {
      return parseConnection(Post, args);
    },

    post(root, { id, slug }, { Post }) {
      if (id) {
        return Post.findOneById(id);
      }
      return Post.findOneBySlug(slug);
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
