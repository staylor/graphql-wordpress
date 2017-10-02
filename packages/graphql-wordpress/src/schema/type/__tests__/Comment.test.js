import CommentType from 'type/Comment';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

// eslint-disable-next-line no-underscore-dangle
const fields = CommentType._typeConfig.fields();

describe('Test Comment type', () => {
  test('Test name', () => {
    expect(CommentType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(CommentType.getFields())).toMatchSnapshot();
  });

  test('Test resolve post', () => {
    const post = fields.post.resolve({ post: 13 }, args, context, info);
    expect(post).toMatchSnapshot();
  });

  test('Test resolve parent', () => {
    const parent = fields.parent.resolve({ parent: 69 }, args, context, info);
    expect(parent).toMatchSnapshot();
  });

  test('Test resolve parent null', () => {
    expect(fields.parent.resolve({ parent: 0 })).toBeNull();
  });

  test('Test resolve avatars', () => {
    const avatars = fields.authorAvatarUrls.resolve({
      author_avatar_urls: {
        thumbnail: 'https://scott.com/avi.jpg',
      },
    });
    expect(avatars).toMatchSnapshot();
  });
});
