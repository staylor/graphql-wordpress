import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import Sidebar from 'data/Sidebar';

// Dataloader expects IDs that can be read by the REST API

export default function getSidebarLoaders() {
  const endpoint = Sidebar.getEndpoint();

  const sidebarLoader = new Dataloader(slugs =>
    fetchData(endpoint).then(({ data: { body } }) =>
      slugs.map(id => body.find(item => item.id === id))
    )
  );

  return {
    load: async id => {
      const data = await sidebarLoader.load(id);
      return data ? Object.assign(new Sidebar(), data) : null;
    },
  };
}
