import { graphql } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { getMockSchema } from 'jest/utils';
import getLoaders from 'data/loaders';

const context = {};
const rootValue = {
  loaders: getLoaders(),
};

const fields = `
  slug
  title {
    rendered
  }
  content {
    rendered
  }
`;

const queryByID = `
  query PageQuery($id: ID!) {
    viewer {
      page(id: $id) {
        ${fields}
      }
    }
  }
`;

const queryBySlug = `
  query PageQuery($slug: String!) {
    viewer {
      page(slug: $slug) {
        ${fields}
      }
    }
  }
`;

// https://highforthis.com/wp-json/wp/v2/pages/215

describe('Test Post queries', () => {
  const schema = getMockSchema({
    Page: () => ({
      date: '2017-01-05T11:55:08',
      slug: 'go-to-this',
    }),
    Title: () => ({
      rendered: 'Go To This',
    }),
    Content: () => ({
      rendered: 'A bunch of content about concerts.',
    }),
  });

  test('GraphQL should return a page by ID', async () => {
    const variables = {
      id: toGlobalId('Page', 215),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a page by slug', async () => {
    const variables = {
      slug: 'go-to-this',
    };
    const result = await graphql(schema, queryBySlug, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
