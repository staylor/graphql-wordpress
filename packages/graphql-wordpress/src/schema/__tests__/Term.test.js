import { graphql } from 'graphql';
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
`;

const queryTerm = `
  query TermQuery($slug: String!, $taxonomy: String!) {
    viewer {
      term(slug: $slug, taxonomy: $taxonomy) {
        ${fields}
      }
    }
  }
`;

describe('Test Term queries', () => {
  test('GraphQL should return a category by slug and taxonomy', async () => {
    const schema = getMockSchema({
      TermInterface: () => ({
        __typename: 'Category',
      }),
      Category: () => ({
        count: 200,
        name: 'Watch This',
        slug: 'watch-this',
        description: '',
      }),
      Rewrite: () => ({
        slug: 'category',
      }),
    });

    const variables = {
      slug: 'watch-this',
      taxonomy: 'category',
    };
    const result = await graphql(schema, queryTerm, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a tag by slug and taxonomy', async () => {
    const schema = getMockSchema({
      TermInterface: () => ({
        __typename: 'Tag',
      }),
      Tag: () => ({
        count: 3,
        name: '285 Kent',
        slug: '285-kent',
        description: '',
      }),
      Rewrite: () => ({
        slug: 'tag',
      }),
    });

    const variables = {
      slug: 'dirty-projectors',
      taxonomy: 'tag',
    };
    const result = await graphql(schema, queryTerm, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
