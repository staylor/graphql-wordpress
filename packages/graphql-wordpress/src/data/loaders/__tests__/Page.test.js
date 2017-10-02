import getPageLoaders from 'data/loaders/Page';

const Page = getPageLoaders();

describe('Test Page loader', () => {
  test('Load a page', async () => {
    const page = await Page.load(13);
    expect(page.getID()).toMatchSnapshot();
    expect(page).toMatchSnapshot();
  });

  test('Load a page by slug', async () => {
    const page = await Page.loadBySlug('go-to-this');
    expect(page).toMatchSnapshot();
  });
});
