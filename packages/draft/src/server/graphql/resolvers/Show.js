import { parseConnection } from './utils/collection';

const resolvers = {
  Show: {
    id(show) {
      return show._id;
    },
    artist(show, args, { Term }) {
      return Term.findOneById(show.artist);
    },
    venue(show, args, { Term }) {
      return Term.findOneById(show.venue);
    },
  },
  Query: {
    shows(root, args, { Show }) {
      return parseConnection(Show, args);
    },

    async show(root, { id, slug }, { Show }) {
      if (id) {
        return Show.findOneById(id);
      }
      return Show.findOneBySlug(slug);
    },
  },
  Mutation: {
    async createShow(root, { input }, { Show }) {
      const id = await Show.insert(input);
      return Show.findOneById(id);
    },

    async updateShow(root, { id, input }, { Show }) {
      await Show.updateById(id, input);
      return Show.findOneById(id);
    },

    removeShow(root, { ids }, { Show }) {
      return Promise.all(ids.map(id => Show.removeById(id)));
    },
  },
};

export default resolvers;
