import { graphql } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { getMockSchema } from 'jest/utils';
import getLoaders from 'data/loaders';

const context = {};
const rootValue = {
  loaders: getLoaders(),
};

const fields = `
  name
  items {
    title
    url
    parent
    order
    type
    typeName
    typeSlug
    dataSlug
    dataID
  }
`;

const queryByID = `
  query NavMenuQuery($id: ID!) {
    viewer {
      navMenu(id: $id) {
        ${fields}
      }
    }
  }
`;

// https://highforthis.com/wp-json/graphql/v1/nav-menus/2

describe('Test NavMenu queries', () => {
  const schema = getMockSchema({
    NavMenu: () => ({
      name: 'Main Nav',
    }),
    NavMenuItem: () => ({
      title: 'Watch This',
      url: 'https://highforthis.com/music/watch-this/',
      parent: null,
      order: 4,
      type: 'taxonomy',
      typeName: 'category',
      typeSlug: 'music',
      dataSlug: 'watch-this',
      dataID: toGlobalId('Category', 4),
    }),
  });

  test('GraphQL should return a Nav Menu by ID', async () => {
    const variables = {
      id: toGlobalId('NavMenu', 2),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
