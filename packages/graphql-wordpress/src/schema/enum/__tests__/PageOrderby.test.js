import PAGE_ORDERBY from 'enum/PageOrderby';

describe('Test enum values', () => {
  test('PAGE_ORDERBY values', () => {
    expect(PAGE_ORDERBY.getValues()).toMatchSnapshot();
  });
});
