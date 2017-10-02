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
  description
  link
  slug
  avatarUrls {
    size
    url
  }
`;

const queryByID = `
  query AuthorQuery($id: ID!) {
    viewer {
      author(id: $id) {
        ${fields}
      }
    }
  }
`;

const queryBySlug = `
  query AuthorQuery($slug: String!) {
    viewer {
      author(slug: $slug) {
        ${fields}
      }
    }
  }
`;

// https://highforthis.com/wp-json/wp/v2/types/post

describe('Test Author queries', () => {
  const schema = getMockSchema({
    User: () => ({
      name: 'Scott Taylor',
      slug: 'admin',
      description: 'I like Mexican food.',
    }),
    Avatar: () => ({
      size: 48,
      url: 'https://scott.com/avatar',
    }),
  });

  test('GraphQL should return a user by ID', async () => {
    const variables = {
      id: toGlobalId('User', 1),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });

  test('GraphQL should return a user by slug', async () => {
    const variables = {
      slug: 'admin',
    };
    const result = await graphql(schema, queryBySlug, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
