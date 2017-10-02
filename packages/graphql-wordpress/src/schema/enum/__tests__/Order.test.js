import ORDER from 'enum/Order';

describe('Test enum values', () => {
  test('ORDER values', () => {
    expect(ORDER.getValues()).toMatchSnapshot();
  });
});
