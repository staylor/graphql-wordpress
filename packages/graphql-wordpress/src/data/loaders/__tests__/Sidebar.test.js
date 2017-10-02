import getSidebarLoaders from 'data/loaders/Sidebar';

const Sidebar = getSidebarLoaders();

describe('Test Sidebar loader', () => {
  test('Load a Sidebar', async () => {
    const sidebar = await Sidebar.load('main-nav');
    expect(sidebar.getID()).toMatchSnapshot();
    expect(sidebar).toMatchSnapshot();
  });
});
