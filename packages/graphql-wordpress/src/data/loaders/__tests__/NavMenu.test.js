import getNavMenuLoaders from 'data/loaders/NavMenu';

const NavMenu = getNavMenuLoaders();

describe('Test NavMenu loader', () => {
  test('Load a NavMenu', async () => {
    const menu = await NavMenu.load('main-nav');
    expect(menu.getID()).toMatchSnapshot();
    expect(menu).toMatchSnapshot();
  });
});
