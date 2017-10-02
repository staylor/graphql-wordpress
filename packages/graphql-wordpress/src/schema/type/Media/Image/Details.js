import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import MediaSize from 'type/Media/Size';
import { dimensions } from 'field/media';

const ImageDetails = new GraphQLObjectType({
  name: 'ImageDetails',
  description: 'The details for the media.',
  fields: {
    ...dimensions,
    file: { type: GraphQLString },
    sizes: {
      type: new GraphQLList(MediaSize),
      resolve: media =>
        Object.keys(media.sizes).map(size => ({
          ...media.sizes[size],
          sourceUrl: media.sizes[size].source_url,
          name: size,
        })),
    },
  },
});

export default ImageDetails;
