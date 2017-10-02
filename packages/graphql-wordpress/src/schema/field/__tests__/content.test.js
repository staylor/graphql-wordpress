import { title, content, excerpt } from 'field/content';

describe('Test schema type field definition', () => {
  test('Test title field', () => {
    const { title: field } = title;
    expect(field.type).toMatchSnapshot();
  });

  test('Test content field', () => {
    const { content: field } = content;
    expect(field.type).toMatchSnapshot();
  });

  test('Test excerpt field', () => {
    const { excerpt: field } = excerpt;
    expect(field.type).toMatchSnapshot();
  });
});
