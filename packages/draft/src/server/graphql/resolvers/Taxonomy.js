import { parseConnection } from './utils/collection';

const resolvers = {
  Taxonomy: {
    id(taxonomy) {
      return taxonomy._id;
    },
  },
  Query: {
    taxonomies(root, args, { Taxonomy }) {
      return parseConnection(Taxonomy, { first: 100 });
    },

    taxonomy(root, { id, slug }, { Taxonomy }) {
      if (id) {
        return Taxonomy.findOneById(id);
      }
      return Taxonomy.findOneBySlug(slug);
    },
  },
  Mutation: {
    async createTaxonomy(root, { input }, { Taxonomy }) {
      const id = await Taxonomy.insert(input);
      return Taxonomy.findOneById(id);
    },

    async updateTaxonomy(root, { id, input }, { Taxonomy }) {
      await Taxonomy.updateById(id, input);
      return Taxonomy.findOneById(id);
    },

    removeTaxonomy(root, { ids }, { Taxonomy }) {
      return Promise.all(ids.map(id => Taxonomy.removeById(id)));
    },
  },
};

export default resolvers;
