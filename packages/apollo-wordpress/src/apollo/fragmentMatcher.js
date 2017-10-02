import { IntrospectionFragmentMatcher } from 'react-apollo';

const introspectionQueryResultData = {
  __schema: {
    types: [
      {
        kind: 'UNION',
        name: 'ContentNode',
        possibleTypes: [
          {
            name: 'Element',
          },
          {
            name: 'Text',
          },
          {
            name: 'Embed',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'User',
          },
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'Page',
          },
          {
            name: 'NavMenu',
          },
          {
            name: 'Sidebar',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'PostInterface',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'Media',
        possibleTypes: [
          {
            name: 'Image',
          },
          {
            name: 'Audio',
          },
          {
            name: 'Video',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'MediaInterface',
        possibleTypes: [
          {
            name: 'Image',
          },
          {
            name: 'Audio',
          },
          {
            name: 'Video',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'TermInterface',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
        ],
      },
    ],
  },
};

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

export default fragmentMatcher;
