import { parseConnection } from './utils/collection';

const resolvers = {
  Video: {
    id(video) {
      return video._id;
    },
  },
  VideoConnection: {
    async years(connection, args, { Video }) {
      const years = (await Video.collection.distinct('year')).filter(y => y);
      years.sort();
      return years.reverse();
    },
  },
  Query: {
    async videos(root, args, { Video }) {
      return parseConnection(Video, args);
    },

    video(root, { id, slug }, { Video }) {
      if (id) {
        return Video.findOneById(id);
      }
      return Video.findOneBySlug(slug);
    },
  },
  Mutation: {
    async createVideo(root, { input }, { Video }) {
      const id = await Video.insert(input);
      return Video.findOneById(id);
    },

    async updateVideo(root, { id, input }, { Video }) {
      await Video.updateById(id, input);
      return Video.findOneById(id);
    },

    removeVideo(root, { id }, { Video }) {
      return Video.removeById(id);
    },
  },
};

export default resolvers;
