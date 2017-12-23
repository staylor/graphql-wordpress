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
  LinkData: {
    id(data) {
      return data.href;
    },
  },
  ImageData: {
    id(data) {
      return data.imageId;
    },
    image(data, args, { Media }) {
      return Media.findOneById(data.imageId);
    },
  },
  VideoData: {
    id(data) {
      return data.videoId;
    },
    video(data, args, { Video }) {
      return Video.findOneById(data.videoId);
    },
  },
};

export default resolvers;
