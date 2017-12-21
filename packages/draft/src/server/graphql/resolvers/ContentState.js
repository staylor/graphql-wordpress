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
      return Media.findOneById(data.id);
    },
  },
  VideoData: {
    video(data, args, { Video }) {
      return Video.findOneById(data.id);
    },
  },
};

export default resolvers;
