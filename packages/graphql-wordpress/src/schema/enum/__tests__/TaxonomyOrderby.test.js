import TAXONOMY_ORDERBY from 'enum/TaxonomyOrderby';

describe('Test enum values', () => {
  test('TAXONOMY_ORDERBY values', () => {
    expect(TAXONOMY_ORDERBY.getValues()).toMatchSnapshot();
  });
});
