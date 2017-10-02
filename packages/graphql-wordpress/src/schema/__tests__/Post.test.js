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
  date
  title {
    rendered
  }
  content {
    rendered
  }
  tags {
    name
  }
`;

const queryByID = `
  query PostQuery($id: ID!) {
    viewer {
      post(id: $id) {
        ${fields}
      }
    }
  }
`;

const queryBySlug = `
  query PostQuery($slug: String!) {
    viewer {
      post(slug: $slug) {
        ${fields}
      }
    }
  }
`;

// https://highforthis.com/wp-json/wp/v2/posts/2696

describe('Test Post queries', () => {
  const schema = getMockSchema({
    Post: () => ({
      date: '2017-01-05T11:55:08',
      slug: 'dirty-projectors-little-bubble',
    }),
    Title: () => ({
      rendered: 'Dirty Projectors - Little Bubble',
    }),
    Content: () => ({
      rendered: 'https://www.youtube.com/watch?v=2IG5f50olZA',
    }),
    Tag: () => ({
      name: 'Dirty Projectors',
    }),
  });

  test('GraphQL should return a post by ID', async () => {
    const variables = {
      id: toGlobalId('Post', 2696),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a post by slug', async () => {
    const variables = {
      slug: 'dirty-projectors-little-bubble',
    };
    const result = await graphql(schema, queryBySlug, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
