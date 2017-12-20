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
    terms(root, args, { Term }) {
      return parseConnection(Term, args);
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
