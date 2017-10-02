import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Comment from 'data/Comment';

// Dataloader expects IDs that can be read by the REST API

export default function getCommentLoaders() {
  const endpoint = Comment.getEndpoint();

  const commentLoader = new Dataloader(ids =>
    fetchData(endpoint, {
      qs: { include: ids, orderby: 'include', per_page: 100 },
    }).then(({ data: { body } }) => body)
  );

  return {
    load: async id => {
      const data = await commentLoader.load(id);
      return data ? Object.assign(new Comment(), data) : null;
    },
  };
}
