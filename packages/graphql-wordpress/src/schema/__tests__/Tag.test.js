import { graphql } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { getMockSchema } from 'jest/utils';
import getLoaders from 'data/loaders';

const context = {};
const rootValue = {
  loaders: getLoaders(),
};

// https://highforthis.com/wp-json/wp/v2/tags/282

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
  meta {
    name
    value
  }
`;

const queryByID = `
  query TagQuery($id: ID!) {
    viewer {
      tag(id: $id) {
        ${fields}
      }
    }
  }
`;

const queryBySlug = `
  query TagQuery($slug: String!) {
    viewer {
      tag(slug: $slug) {
        ${fields}
      }
    }
  }
`;

describe('Test Tag queries', () => {
  const schema = getMockSchema({
    Tag: () => ({
      count: 3,
      name: '285 Kent',
      slug: '285-kent',
      description: '',
      meta: null,
    }),
    Rewrite: () => ({
      slug: 'tag',
    }),
  });

  test('GraphQL should return a tag by ID', async () => {
    const variables = {
      id: toGlobalId('Tag', 282),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a tag by slug', async () => {
    const variables = {
      slug: '285-kent',
    };
    const result = await graphql(schema, queryBySlug, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
