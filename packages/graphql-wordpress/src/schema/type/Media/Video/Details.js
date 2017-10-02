import { GraphQLObjectType } from 'graphql';
import { lengthFields, fileFields, dimensions, dataFormat } from 'field/media';

const VideoDetails = new GraphQLObjectType({
  name: 'VideoDetails',
  description: 'Details of the video file.',
  fields: {
    ...lengthFields,
    ...fileFields,
    ...dimensions,
    ...dataFormat,
  },
});

export default VideoDetails;
