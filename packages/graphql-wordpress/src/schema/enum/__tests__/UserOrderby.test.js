import USER_ORDERBY from 'enum/UserOrderby';

describe('Test enum values', () => {
  test('USER_ORDERBY values', () => {
    expect(USER_ORDERBY.getValues()).toMatchSnapshot();
  });
});
