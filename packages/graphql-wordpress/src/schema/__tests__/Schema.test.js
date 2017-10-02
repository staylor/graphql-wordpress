import Schema from '../../schema';

describe('Test Schema', () => {
  test('Types', () => {
    expect(Schema.getTypeMap()).toMatchSnapshot();
  });
});
