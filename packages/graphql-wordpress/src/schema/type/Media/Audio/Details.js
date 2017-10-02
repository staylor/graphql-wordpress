import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';
import { lengthFields, fileFields, dataFormat } from 'field/media';

const AudioDetails = new GraphQLObjectType({
  name: 'AudioDetails',
  description: 'Details of the audio file.',
  fields: {
    title: { type: GraphQLString },
    artist: { type: GraphQLString },
    album: { type: GraphQLString },
    band: { type: GraphQLString },
    composer: { type: GraphQLString },
    ...lengthFields,
    ...fileFields,
    ...dataFormat,
    sampleRate: {
      type: GraphQLInt,
      resolve: details => details.sample_rate,
    },
    bitrate: { type: GraphQLInt },
    bitrateMode: {
      type: GraphQLString,
      resolve: details => details.bitrate_mode,
    },
    encoderOptions: {
      type: GraphQLString,
      resolve: details => details.encoder_options,
    },
    channels: { type: GraphQLInt },
    channelMode: {
      type: GraphQLString,
      resolve: details => details.channel_mode,
    },
  },
});

export default AudioDetails;
