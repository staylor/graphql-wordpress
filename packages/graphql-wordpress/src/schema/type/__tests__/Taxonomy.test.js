import TaxonomyType from 'type/Taxonomy';

// eslint-disable-next-line no-underscore-dangle
const fields = TaxonomyType._typeConfig.fields;

describe('Test Taxonomy type', () => {
  test('Test name', () => {
    expect(TaxonomyType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(TaxonomyType.getFields())).toMatchSnapshot();
  });

  test('Test resolve name', () => {
    const name = fields.name.resolve({ slug: 'category' });
    expect(name).toMatchSnapshot();
  });
});
