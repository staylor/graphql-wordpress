import fields from 'field/raw';

describe('Test schema type field definition', () => {
  test('Test raw field', () => {
    expect(fields.raw.type.name).toMatchSnapshot();
  });
});
