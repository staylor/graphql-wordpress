import getCategoryLoaders from 'data/loaders/Category';

const Category = getCategoryLoaders();

describe('Test Category loader', () => {
  test('Load a category', async () => {
    const cat = await Category.load(13);
    expect(cat.getID()).toMatchSnapshot();
    expect(cat).toMatchSnapshot();
  });

  test('Load a category by slug', async () => {
    const cat = await Category.loadBySlug('watch-this');
    expect(cat).toMatchSnapshot();
  });

  test('Load categories', async () => {
    const cat = await Category.loadMany([13, 17]);
    expect(cat).toMatchSnapshot();
  });
});
