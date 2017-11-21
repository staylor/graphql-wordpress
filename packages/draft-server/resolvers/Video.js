const resolvers = {
  Video: {
    id(video) {
      return video._id;
    },
  },
  Query: {
    videos(root, { limit }, { Video }) {
      return Video.all({ limit });
    },

    video(root, { id }, { Video }) {
      return Video.findOneById(id);
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
