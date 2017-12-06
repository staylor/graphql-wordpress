const resolvers = {
  Settings: {
    __resolveType(settings) {
      if (settings._id === 'site') {
        return 'SiteSettings';
      }
      return null;
    },
  },
  SiteSettings: {
    id(settings) {
      return settings._id;
    },
  },
  Query: {
    settings(root, { id }, { Settings }) {
      return Settings.findOneById(id);
    },
  },
  Mutation: {
    async updateSettings(root, { id, input }, { Settings }) {
      await Settings.updateById(id, input);
      return Settings.findOneById(id);
    },
  },
};

export default resolvers;
