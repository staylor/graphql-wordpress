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
  MediaUploadConnection: {
    async types(connection, args, { Media }) {
      const types = await Media.collection.distinct('type');
      types.sort();
      return types;
    },
    async mimeTypes(connection, args, { Media }) {
      const mimeTypes = await Media.collection.distinct('mimeType');
      mimeTypes.sort();
      return mimeTypes;
    },
  },
  Query: {
    async uploads(root, args, { Media }) {
      return parseConnection(Media, args);
    },
    media(root, { id }, { Media }) {
      return Media.findOneById(id);
    },
  },
  Mutation: {
    async updateMediaUpload(root, { id, input }, { Media }) {
      await Media.updateById(id, input);
      return Media.findOneById(id);
    },

    async removeMediaUpload(root, { ids }, { Media }) {
      return Promise.all(ids.map(id => Media.removeById(id)));
    },
  },
};

export default resolvers;
