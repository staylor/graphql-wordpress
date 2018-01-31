import { parseConnection } from './utils/collection';
import resolveTags from './utils/resolveTags';

const resolvers = {
  Post: {
    id(post) {
      return post._id;
    },
    date(post) {
      return post.createdAt;
    },
    featuredMedia(post, args, { Media }) {
      return Media.findByIds(post.featuredMedia || []);
    },
    artists(post, args, { Term }) {
      return Term.findByIds(post.artists || []);
    },
  },
  Query: {
    async posts(root, args, { Post, authUser }) {
      const connectionArgs = Object.assign({}, args);
      const userCanSee = authUser && authUser.roles && authUser.roles.includes('admin');
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

      const userCanSee = authUser && authUser.roles && authUser.roles.includes('admin');
      if (post.status === 'DRAFT' && !userCanSee) {
        throw new Error('You do not have permission');
      }

      return post;
    },
  },
  Mutation: {
    async createPost(root, { input }, { Post, Taxonomy, Term }) {
      if (input.artists && input.artists.length > 0) {
        input.artists = await resolveTags('Artist', input.artists, {
          Taxonomy,
          Term,
        });
      } else {
        input.artists = [];
      }

      const id = await Post.insert(input);
      return Post.findOneById(id);
    },

    async updatePost(root, { id, input }, { Post, Taxonomy, Term }) {
      if (input.artists && input.artists.length > 0) {
        input.artists = await resolveTags('Artist', input.artists, {
          Taxonomy,
          Term,
        });
      } else {
        input.artists = [];
      }

      await Post.updateById(id, input);
      return Post.findOneById(id);
    },

    removePost(root, { ids }, { Post }) {
      return Promise.all(ids.map(id => Post.removeById(id)));
    },
  },
};

export default resolvers;
