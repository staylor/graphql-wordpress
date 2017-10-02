import Dataloader from 'dataloader';
import fetchData from 'data/utils';
import NavMenu from 'data/NavMenu';

// Dataloader expects IDs that can be read by the REST API

export default function getNavMenuLoaders() {
  const endpoint = NavMenu.getEndpoint();

  const navMenuLoader = new Dataloader(ids =>
    fetchData(endpoint)
      .then(({ data: { body } }) => body)
      .then(menus => ids.map(id => menus.find(item => item.id === parseInt(id, 10))))
  );

  return {
    load: async id => {
      const data = await navMenuLoader.load(id);
      return data ? Object.assign(new NavMenu(), data) : null;
    },
  };
}
