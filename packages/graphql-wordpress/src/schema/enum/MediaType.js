import { GraphQLEnumType } from 'graphql';

const MEDIA_TYPE = new GraphQLEnumType({
  name: 'MEDIA_TYPE',
  description: 'Attachment type.',
  values: {
    IMAGE: { value: 'image' },
    VIDEO: { value: 'video' },
    AUDIO: { value: 'audio' },
    APPLICATION: { value: 'application' },
    FILE: { value: 'file' },
  },
});

export default MEDIA_TYPE;
