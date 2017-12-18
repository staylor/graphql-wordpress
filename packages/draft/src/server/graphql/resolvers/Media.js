import { parseConnection } from './utils/collection';

const resolvers = {
  MediaUpload: {
    __resolveType(media) {
      if (media.type === 'image') {
        return 'ImageUpload';
      } else if (media.type === 'audio') {
        return 'AudioUpload';
      } else if (media.type === 'video') {
        return 'VideoUpload';
      }
      return 'FileUpload';
    },
  },
  ImageUpload: {
    id(media) {
      return media._id;
    },
  },
  AudioUpload: {
    id(media) {
      return media._id;
    },
  },
  VideoUpload: {
    id(media) {
      return media._id;
    },
  },
  FileUpload: {
    id(media) {
      return media._id;
    },
  },
  Query: {
    async uploads(root, args, { Media }) {
      return parseConnection(Media, args);
    },
  },
  Mutation: {
    async createMediaUpload(root, { input }, { Media }) {
      const id = await Media.insert(input);
      return Media.findOneById(id);
    },

    async updateMediaUpload(root, { id, input }, { Media }) {
      await Media.updateById(id, input);
      return Media.findOneById(id);
    },

    removeMediaUpload(root, { id }, { Media }) {
      return Media.removeById(id);
    },
  },
};

export default resolvers;
