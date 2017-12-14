import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'UNION',
          name: 'EntityData',
          possibleTypes: [
            {
              name: 'LinkData',
            },
            {
              name: 'EmbedData',
            },
          ],
        },
        {
          kind: 'INTERFACE',
          name: 'Settings',
          possibleTypes: [
            {
              name: 'SiteSettings',
            },
          ],
        },
      ],
    },
  },
});

export default fragmentMatcher;
