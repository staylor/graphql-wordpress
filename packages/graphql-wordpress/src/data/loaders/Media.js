import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Media from 'data/Media';

// Dataloader expects IDs that can be read by the REST API

export default function getMediaLoaders() {
  const endpoint = Media.getEndpoint();

  const mediaLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body } }) => body)
  );
  const slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, {
      qs: { slug: slugs, orderby: 'slug', per_page: 100 },
    }).then(({ data: { body } }) => body)
  );

  return {
    load: async id => {
      const data = await mediaLoader.load(id);
      return data ? Object.assign(new Media(), data) : null;
    },

    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new Media(), data) : null;
    },
  };
}
