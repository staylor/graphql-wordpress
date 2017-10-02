import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Tag from 'data/Tag';

// Dataloader expects IDs that can be read by the REST API

export default function getTagLoaders() {
  const endpoint = Tag.getEndpoint();

  const tagLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, per_page: 100, orderby: 'include' },
    }).then(({ data: { body } }) => body)
  );
  const slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, { qs: { slug: slugs, per_page: 100 } })
      .then(({ data: { body } }) => body)
      // the REST API does not order by FIELD(slug, ....) yet
      .then(tags => slugs.map(slug => tags.find(tag => slug === tag.slug)))
  );

  return {
    load: async id => {
      const data = await tagLoader.load(id);
      return data ? Object.assign(new Tag(), data) : null;
    },

    loadMany: async ids => {
      const data = await tagLoader.loadMany(ids);
      return data ? data.map(entry => Object.assign(new Tag(), entry)) : null;
    },

    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new Tag(), data) : null;
    },
  };
}
