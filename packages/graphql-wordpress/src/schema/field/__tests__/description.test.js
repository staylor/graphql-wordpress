import fields from 'field/description';

describe('Test schema type field definition', () => {
  test('Test description field', () => {
    expect(fields.description.type.name).toMatchSnapshot();
  });
});
