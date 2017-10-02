import { graphql } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { getMockSchema } from 'jest/utils';
import getLoaders from 'data/loaders';

const context = {};
const rootValue = {
  loaders: getLoaders(),
};

const queryByID = `
  query NodeQuery($id: ID!) {
    node(id: $id) {
      __typename
      id
    }
  }
`;

const mocks = {
  Category: () => ({
    __typename: 'Category',
    id: 1,
  }),
  Tag: () => ({
    __typename: 'Tag',
    id: 1,
  }),
  Page: () => ({
    __typename: 'Page',
    id: 1,
  }),
  Post: () => ({
    __typename: 'Post',
    id: 1,
  }),
  User: () => ({
    __typename: 'User',
    id: 1,
  }),
  Sidebar: () => ({
    __typename: 'Sidebar',
    id: 1,
  }),
  NavMenu: () => ({
    __typename: 'NavMenu',
    id: 1,
  }),
};

describe('Test Node queries', () => {
  test('GraphQL should return a node by category ID', async () => {
    const variables = {
      id: toGlobalId('Category', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'Category',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by tag ID', async () => {
    const variables = {
      id: toGlobalId('Tag', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'Tag',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by post ID', async () => {
    const variables = {
      id: toGlobalId('Post', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'Post',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by page ID', async () => {
    const variables = {
      id: toGlobalId('Page', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'Page',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by user ID', async () => {
    const variables = {
      id: toGlobalId('User', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'User',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by sidebar ID', async () => {
    const variables = {
      id: toGlobalId('Sidebar', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'Sidebar',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a node by NavMenu ID', async () => {
    const variables = {
      id: toGlobalId('NavMenu', 1),
    };
    const schema = getMockSchema({
      ...mocks,
      Node: () => ({
        __typename: 'NavMenu',
        id: 1,
      }),
    });
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
