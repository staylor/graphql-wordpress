import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Post from 'data/Post';

// Dataloader expects IDs that can be read by the REST API

export default function getPostLoaders() {
  const endpoint = Post.getEndpoint();

  let slugLoader;
  const postLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body: posts } }) => {
      posts.forEach(post => {
        slugLoader.prime(post.slug, post);
      });
      return posts;
    })
  );
  slugLoader = new Dataloader(slugs =>
    fetchData(endpoint, {
      qs: { slug: slugs, orderby: 'slug', per_page: 100 },
    }).then(({ data: { body: posts } }) => {
      posts.forEach(post => {
        postLoader.prime(post.id, post);
      });
      return posts;
    })
  );

  return {
    load: async id => {
      const data = await postLoader.load(id);
      return data ? Object.assign(new Post(), data) : null;
    },
    loadBySlug: async slug => {
      const data = await slugLoader.load(slug);
      return data ? Object.assign(new Post(), data) : null;
    },
  };
}
