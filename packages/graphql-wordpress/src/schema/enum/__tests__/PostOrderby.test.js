import POST_ORDERBY from 'enum/PostOrderby';

describe('Test enum values', () => {
  test('POST_ORDERBY values', () => {
    expect(POST_ORDERBY.getValues()).toMatchSnapshot();
  });
});
