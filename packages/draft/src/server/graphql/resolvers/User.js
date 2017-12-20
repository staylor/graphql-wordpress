import { parseConnection } from './utils/collection';

const resolvers = {
  User: {
    id(user) {
      return user._id;
    },
  },
  Query: {
    async users(root, args, { User }) {
      return parseConnection(User, args);
    },

    user(root, { id }, { User }) {
      return User.findOneById(id);
    },
  },
  Mutation: {
    async createUser(root, { input }, { User }) {
      let id;
      try {
        id = await User.insert(input);
      } catch (e) {
        throw e;
      }
      return User.findOneById(id);
    },

    async updateUser(root, { id, input }, { User }) {
      await User.updateById(id, input);
      return User.findOneById(id);
    },

    removeUser(root, { id }, { User }) {
      return User.removeById(id);
    },
  },
};

export default resolvers;
