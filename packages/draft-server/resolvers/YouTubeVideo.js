const resolvers = {
  YouTubeVideo: {
    id(youTubeVideo) {
      return youTubeVideo._id;
    },
  },
  Query: {
    youTubeVideos(root, { lastCreatedAt, limit }, { YouTubeVideo }) {
      return YouTubeVideo.all({});
    },

    youTubeVideo(root, { id }, { YouTubeVideo }) {
      return YouTubeVideo.findOneById(id);
    },
  },
  Mutation: {
    async createYouTubeVideo(root, { input }, { YouTubeVideo }) {
      const id = await YouTubeVideo.insert(input);
      return YouTubeVideo.findOneById(id);
    },

    async updateYouTubeVideo(root, { id, input }, { YouTubeVideo }) {
      await YouTubeVideo.updateById(id, input);
      return YouTubeVideo.findOneById(id);
    },

    removeYouTubeVideo(root, { id }, { YouTubeVideo }) {
      return YouTubeVideo.removeById(id);
    },
  },
  Subscription: {
    youTubeVideoCreated: youTubeVideo => youTubeVideo,
    youTubeVideoUpdated: youTubeVideo => youTubeVideo,
    youTubeVideoRemoved: id => id,
  },
};

export default resolvers;
