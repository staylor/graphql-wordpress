import PostType from 'type/Post';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

// eslint-disable-next-line no-underscore-dangle
const fields = PostType._typeConfig.fields();

describe('Test Post type', () => {
  test('Test name', () => {
    expect(PostType.name).toMatchSnapshot();
  });

  test('Test type', () => {
    expect(PostType.isTypeOf({ type: 'post' })).toBe(true);
  });

  test('Test fields', () => {
    expect(Object.keys(PostType.getFields())).toMatchSnapshot();
  });

  test('Test resolve categories', async () => {
    const categories = await fields.categories.resolve({ categories: [69] }, args, context, info);
    expect(categories).toMatchSnapshot();
  });

  test('Test resolve categories null', () => {
    expect(fields.categories.resolve({ categories: [] }, args, context, info)).toBeNull();
  });

  test('Test resolve tags', async () => {
    const tags = await fields.tags.resolve({ tags: [69] }, args, context, info);
    expect(tags).toMatchSnapshot();
  });

  test('Test resolve tags null', () => {
    expect(fields.tags.resolve({ tags: [] }, args, context, info)).toBeNull();
  });
});
