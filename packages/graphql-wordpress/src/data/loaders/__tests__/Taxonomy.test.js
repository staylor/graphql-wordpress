import getTaxonomyLoaders from 'data/loaders/Taxonomy';

const Taxonomy = getTaxonomyLoaders();

describe('Test Taxonomy loader', () => {
  test('Load a taxonomy', async () => {
    const tax = await Taxonomy.load('tag');
    expect(tax.getID()).toMatchSnapshot();
    expect(tax).toMatchSnapshot();
  });
});
