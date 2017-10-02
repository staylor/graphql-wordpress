import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import User from 'data/User';

// Dataloader expects IDs that can be read by the REST API

export default function getUserLoaders() {
  const endpoint = User.getEndpoint();

  let slugLoader;
  const userLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body: users } }) => {
      users.forEach(user => {
        slugLoader.prime(user.slug, user);
      });
      return users;
    })
  );
  slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, { qs: { slug: slugs } })
      .then(({ data: { body } }) => body)
      // the REST API does not order by FIELD(slug, ....) yet
      .then(users => slugs.map(slug => users.find(user => slug === user.slug)))
      .then(users => {
        users.forEach(user => {
          userLoader.prime(user.id, user);
        });
        return users;
      })
  );

  return {
    load: async id => {
      const data = await userLoader.load(id);
      return data ? Object.assign(new User(), data) : null;
    },

    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new User(), data) : null;
    },
  };
}
