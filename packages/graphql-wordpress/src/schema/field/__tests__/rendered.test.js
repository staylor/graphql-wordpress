import fields from 'field/rendered';

describe('Test schema type field definition', () => {
  test('Test rendered field', () => {
    expect(fields.rendered.type.name).toMatchSnapshot();
  });
});
