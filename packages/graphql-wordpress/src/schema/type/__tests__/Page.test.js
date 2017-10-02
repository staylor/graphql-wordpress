import PageType from 'type/Page';
import getLoaders from 'data/loaders';

const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};

// eslint-disable-next-line no-underscore-dangle
const fields = PageType._typeConfig.fields();

describe('Test Page type', () => {
  test('Test name', () => {
    expect(PageType.name).toMatchSnapshot();
  });

  test('Test type', () => {
    expect(PageType.isTypeOf({ type: 'page' })).toBe(true);
  });

  test('Test fields', () => {
    expect(Object.keys(PageType.getFields())).toMatchSnapshot();
  });

  test('Test resolve parent', async () => {
    const parent = await fields.parent.resolve({ parent: 69 }, args, context, info);
    expect(parent).toMatchSnapshot();
  });

  test('Test resolve parent null', () => {
    expect(fields.parent.resolve({ parent: 0 }, args, context, info)).toBeNull();
  });
});
