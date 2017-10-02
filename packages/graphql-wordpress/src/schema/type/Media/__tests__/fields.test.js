import fields from 'type/Media/fields';

describe('Test Media fields', () => {
  test('Test fields', () => {
    expect(Object.keys(fields)).toMatchSnapshot();
  });

  test('Test resolve post', () => {
    const post = fields.post.resolve({ post: 13 });
    expect(post).toMatchSnapshot();
  });
});
