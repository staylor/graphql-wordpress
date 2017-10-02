import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Taxonomy from 'data/Taxonomy';

// Dataloader expects IDs that can be read by the REST API

export default function getTaxonomyLoaders() {
  // there is no batch mechanism on this endpoint
  const endpoint = Taxonomy.getEndpoint();

  const taxonomyLoader = new Dataloader(slugs =>
    fetchData(endpoint).then(({ data: { body } }) => slugs.map(slug => body[slug]))
  );

  return {
    load: async slug => {
      const data = await taxonomyLoader.load(slug);
      return data ? Object.assign(new Taxonomy(), data) : null;
    },
  };
}
