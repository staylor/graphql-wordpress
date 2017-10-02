import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Category from 'data/Category';

// Dataloader expects IDs that can be read by the REST API

export default function getCategoryLoaders() {
  const endpoint = Category.getEndpoint();

  let slugLoader;
  const categoryLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body: categories } }) => {
      categories.forEach(category => {
        slugLoader.prime(category.slug, category);
      });
      return categories;
    })
  );
  slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, { qs: { slug: slugs, per_page: 100 } })
      .then(({ data: { body } }) => body)
      // the REST API does not order by FIELD(slug, ....) yet
      .then(categories => slugs.map(slug => categories.find(cat => slug === cat.slug)))
      .then(categories => {
        categories.forEach(category => {
          categoryLoader.prime(category.id, category);
        });
        return categories;
      })
  );

  return {
    load: async id => {
      const data = await categoryLoader.load(id);
      return data ? Object.assign(new Category(), data) : null;
    },
    loadMany: async ids => {
      const data = await categoryLoader.loadMany(ids);
      return data ? data.map(entry => Object.assign(new Category(), entry)) : null;
    },
    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new Category(), data) : null;
    },
  };
}
