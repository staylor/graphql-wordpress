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
  count
  description
  slug
  taxonomy {
    rewrite {
      slug
    }
  }
  parent {
    id
    name
  }
  meta {
    name
    value
  }
`;

const queryByID = `
  query CategoryQuery($id: ID!) {
    viewer {
      category(id: $id) {
        ${fields}
      }
    }
  }
`;

const queryBySlug = `
  query CategoryQuery($slug: String!) {
    viewer {
      category(slug: $slug) {
        ${fields}
      }
    }
  }
`;

describe('Test Category queries', () => {
  const schema = getMockSchema({
    Category: () => ({
      count: 200,
      name: 'Watch This',
      slug: 'watch-this',
      description: '',
      parent: null,
      meta: null,
    }),
    Rewrite: () => ({
      slug: 'category',
    }),
  });

  test('GraphQL should return a category by ID', async () => {
    const variables = {
      id: toGlobalId('Category', 4),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a category by slug', async () => {
    const variables = {
      slug: 'watch-this',
    };
    const result = await graphql(schema, queryBySlug, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
