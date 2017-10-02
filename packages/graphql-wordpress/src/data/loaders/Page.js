import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Page from 'data/Page';

// Dataloader expects IDs that can be read by the REST API

export default function getPageLoaders() {
  const endpoint = Page.getEndpoint();
  const pageLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body } }) => body)
  );
  const slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, { qs: { slug: slugs } })
      .then(({ data: { body } }) => body)
      // the REST API does not order by FIELD(slug, ....) yet
      .then(pages => slugs.map(slug => pages.find(page => slug === page.slug)))
  );
  return {
    load: async id => {
      const data = await pageLoader.load(id);
      return data ? Object.assign(new Page(), data) : null;
    },
    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new Page(), data) : null;
    },
  };
}
