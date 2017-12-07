import { parseConnection } from '../utils/collection';

const resolvers = {
  Post: {
    id(post) {
      return post._id;
    },
    tags(post, args, { Post }) {
      return Post.findTags(post.tags);
    },
  },
  PostConnection: {
    async tags(connection, args, { Post }) {
      const tags = await Post.collection.distinct('tags');
      tags.sort();
      return Post.findTags(tags);
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

    removePost(root, { id }, { Post }) {
      return Post.removeById(id);
    },
  },
};

export default resolvers;
