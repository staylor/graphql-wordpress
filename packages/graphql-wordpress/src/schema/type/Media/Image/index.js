import { GraphQLObjectType } from 'graphql';

import MediaInterface from 'interface/Media';
import mediaFields from 'type/Media/fields';
import ImageDetails from 'type/Media/Image/Details';

const ImageType = new GraphQLObjectType({
  name: 'Image',
  description: 'An object.',
  interfaces: [MediaInterface],
  isTypeOf(media) {
    return media.mime_type.indexOf('image') === 0;
  },
  fields: {
    ...mediaFields,
    mediaDetails: {
      type: ImageDetails,
      resolve: media => media.media_details,
    },
  },
});

export default ImageType;
