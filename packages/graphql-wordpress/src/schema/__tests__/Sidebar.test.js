import { graphql } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { getMockSchema } from 'jest/utils';
import getLoaders from 'data/loaders';

const context = {};
const rootValue = {
  loaders: getLoaders(),
};

const fields = `
  widgets {
    classname
    content {
      rendered
    }
  }
`;

const queryByID = `
  query NavMenuQuery($id: ID!) {
    viewer {
      sidebar(id: $id) {
        ${fields}
      }
    }
  }
`;

// https://highforthis.com/wp-json/graphql/v1/sidebars/sidebar-1

describe('Test NavMenu queries', () => {
  const schema = getMockSchema({
    Widget: () => ({
      classname: 'cool-widget',
    }),
    Content: () => ({
      rendered: 'This is a bunch of <blink>WIDGET</blink> content.',
    }),
  });

  test('GraphQL should return a Sidebar by ID', async () => {
    const variables = {
      id: toGlobalId('Sidebar', 'sidebar-1'),
    };
    const result = await graphql(schema, queryByID, rootValue, context, variables);
    expect(result).toMatchSnapshot();
  });
});
