import { type, template, format, sticky } from 'field/post';

describe('Test schema type field definition', () => {
  test('Test type field', () => {
    const { type: field } = type;
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test template field', () => {
    const { template: field } = template;
    expect(field.type).toMatchSnapshot();
  });

  test('Test format field', () => {
    const { format: field } = format;
    expect(field.type.name).toMatchSnapshot();
  });

  test('Test sticky field', () => {
    const { sticky: field } = sticky;
    expect(field.type).toMatchSnapshot();
  });
});
