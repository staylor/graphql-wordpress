import { parseConnection } from '../utils/collection';

const resolvers = {
  Tag: {
    id(tag) {
      return tag._id;
    },
  },
  Query: {
    async tags(root, args, { Tag }) {
      return parseConnection(Tag, args);
    },

    tag(root, { id }, { Tag }) {
      return Tag.findOneById(id);
    },
  },
  Mutation: {
    async createTag(root, { input }, { Tag }) {
      const id = await Tag.insert(input);
      return Tag.findOneById(id);
    },

    async updateTag(root, { id, input }, { Tag }) {
      await Tag.updateById(id, input);
      return Tag.findOneById(id);
    },

    removeTag(root, { id }, { Tag }) {
      return Tag.removeById(id);
    },
  },
};

export default resolvers;
