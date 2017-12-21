import { parseConnection } from './utils/collection';

const resolvers = {
  Term: {
    id(term) {
      return term._id;
    },
    taxonomy(term, args, { Taxonomy }) {
      return Taxonomy.findOneById(term.taxonomy);
    },
  },
  Query: {
    async terms(root, args, { Term, Taxonomy }) {
      const connection = await parseConnection(Term, args);
      const { taxonomyId, taxonomy } = args;
      if (taxonomyId) {
        connection.taxonomy = await Taxonomy.findOneById(taxonomyId);
      } else if (taxonomy) {
        connection.taxonomy = await Taxonomy.findOneBySlug(taxonomy);
      }
      return connection;
    },

    async term(root, { id, slug, taxonomy }, { Term, Taxonomy }) {
      if (id) {
        return Term.findOneById(id);
      }
      const taxId = (await Taxonomy.findOneBySlug(taxonomy))._id;
      return Term.findByTermTaxonomy(slug, taxId);
    },
  },
  Mutation: {
    async createTerm(root, { input }, { Term }) {
      const id = await Term.insert(input);
      return Term.findOneById(id);
    },

    async updateTerm(root, { id, input }, { Term }) {
      await Term.updateById(id, input);
      return Term.findOneById(id);
    },

    removeTerm(root, { ids }, { Term }) {
      return Promise.all(ids.map(id => Term.removeById(id)));
    },
  },
};

export default resolvers;
