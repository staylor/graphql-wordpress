import fields from 'field/protected';

describe('Test schema type field definition', () => {
  test('Test protected field', () => {
    expect(fields.protected.type.name).toMatchSnapshot();
  });
});
