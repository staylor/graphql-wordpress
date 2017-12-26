import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: {
    __schema: {
      types: [
        {
          kind: 'INTERFACE',
          name: 'MediaUpload',
          possibleTypes: [
            {
              name: 'ImageUpload',
            },
            {
              name: 'AudioUpload',
            },
            {
              name: 'VideoUpload',
            },
            {
              name: 'FileUpload',
            },
          ],
        },
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
            {
              name: 'ImageData',
            },
            {
              name: 'VideoData',
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
            {
              name: 'SocialSettings',
            },
            {
              name: 'MediaSettings',
            },
          ],
        },
      ],
    },
  },
});

export default fragmentMatcher;
