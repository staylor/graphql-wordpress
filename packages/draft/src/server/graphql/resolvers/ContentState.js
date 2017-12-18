const resolvers = {
  EntityData: {
    __resolveType(entity) {
      if (entity.type === 'EMBED') {
        return 'EmbedData';
      }
      if (entity.type === 'LINK') {
        return 'LinkData';
      }
      return null;
    },
  },
};

export default resolvers;
