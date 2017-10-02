import { toGlobalId } from 'graphql-relay';
import ViewerType from 'type/Viewer';
import getLoaders from 'data/loaders';

const root = {
  id: 'me',
};
const args = {};
const context = {};
const info = {
  rootValue: {
    loaders: getLoaders(),
  },
};
// eslint-disable-next-line no-underscore-dangle
const fields = ViewerType._typeConfig.fields();

describe('Test Viewer type', () => {
  test('Test name', () => {
    expect(ViewerType.name).toMatchSnapshot();
  });

  test('Test fields', () => {
    expect(Object.keys(ViewerType.getFields())).toMatchSnapshot();
  });

  test('Test resolve post via slug and item resolver', async () => {
    const post = await fields.post.resolve(
      root,
      {
        slug: 'this-is-a-post',
      },
      context,
      info
    );
    expect(post).toMatchSnapshot();
  });

  test('Test resolve post via id and item resolver', async () => {
    const post = await fields.post.resolve(
      root,
      {
        id: toGlobalId('Post', 13),
      },
      context,
      info
    );
    expect(post).toMatchSnapshot();
  });

  test('Test resolve category via term', async () => {
    const term = await fields.term.resolve(
      root,
      {
        slug: 'watch-this',
        taxonomy: 'category',
      },
      context,
      info
    );
    expect(term).toMatchSnapshot();
  });

  test('Test resolve tag via term', async () => {
    const term = await fields.term.resolve(
      root,
      {
        slug: 'dirty-projectors',
        taxonomy: 'tag',
      },
      context,
      info
    );
    expect(term).toMatchSnapshot();
  });

  test('Test resolve null term', () => {
    expect(
      fields.term.resolve(
        root,
        {
          slug: 'pizza',
          taxonomy: 'whatever',
        },
        context,
        info
      )
    ).toBeNull();
  });

  test('Test resolve settings', async () => {
    const settings = await fields.settings.resolve(root, args, context, info);
    expect(settings).toMatchSnapshot();
  });

  test('Test resolve chart', async () => {
    const chart = await fields.chart.resolve(root, args, context, info);
    expect(chart).toMatchSnapshot();
  });
});
