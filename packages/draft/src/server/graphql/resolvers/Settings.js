const resolvers = {
  Settings: {
    __resolveType(settings) {
      if (settings._id === 'site') {
        return 'SiteSettings';
      } else if (settings._id === 'social') {
        return 'SocialSettings';
      } else if (settings._id === 'dashboard') {
        return 'DashboardSettings';
      } else if (settings._id === 'media') {
        return 'MediaSettings';
      }
      return null;
    },
  },
  SiteSettings: {
    id(settings) {
      return settings._id;
    },
  },
  DashboardSettings: {
    id(settings) {
      return settings._id;
    },
  },
  SocialSettings: {
    id(settings) {
      return settings._id;
    },
  },
  MediaSettings: {
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
    async updateSiteSettings(root, { id, input }, { Settings }) {
      await Settings.updateById(id, input);
      return Settings.findOneById(id);
    },
    async updateDashboardSettings(root, { id, input }, { Settings }) {
      await Settings.updateById(id, input);
      return Settings.findOneById(id);
    },
    async updateSocialSettings(root, { id, input }, { Settings }) {
      await Settings.updateById(id, input);
      return Settings.findOneById(id);
    },
    async updateMediaSettings(root, { id, input }, { Settings }) {
      await Settings.updateById(id, input);
      return Settings.findOneById(id);
    },
  },
};

export default resolvers;
