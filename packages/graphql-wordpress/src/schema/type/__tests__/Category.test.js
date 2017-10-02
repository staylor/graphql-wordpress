import CategoryType from 'type/Category';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

// eslint-disable-next-line no-underscore-dangle
const fields = CategoryType._typeConfig.fields();

describe('Test Category type', () => {
  test('Test name', () => {
    expect(CategoryType.name).toMatchSnapshot();
  });

  test('Test type', () => {
    expect(CategoryType.isTypeOf({ taxonomy: 'category' })).toBe(true);
  });

  test('Test fields', () => {
    expect(Object.keys(CategoryType.getFields())).toMatchSnapshot();
  });

  test('Test resolve parent', async () => {
    const parent = await fields.parent.resolve({ parent: 69 }, args, context, info);
    expect(parent).toMatchSnapshot();
  });

  test('Test resolve parent null', () => {
    expect(fields.parent.resolve({ parent: 0 }, args, context, info)).toBeNull();
  });
});
