const resolvers = {
  EntityData: {
    __resolveType(entity) {
      if (entity.type === 'EMBED') {
        return 'EmbedData';
      }
      if (entity.type === 'LINK') {
        return 'LinkData';
      }
      if (entity.type === 'IMAGE') {
        return 'ImageData';
      }
      if (entity.type === 'VIDEO') {
        return 'VideoData';
      }
      return null;
    },
  },
  ImageData: {
    image(data, args, { Media }) {
      return Media.findOneById(data.imageId);
    },
  },
  VideoData: {
    video(data, args, { Video }) {
      return Video.findOneById(data.videoId);
    },
  },
};

export default resolvers;
