import { GraphQLEnumType } from 'graphql';

const FORMAT = new GraphQLEnumType({
  name: 'FORMAT',
  description: 'The format for the object.',
  values: {
    STANDARD: { value: 'standard' },
    ASIDE: { value: 'aside' },
    CHAT: { value: 'chat' },
    GALLERY: { value: 'gallery' },
    LINK: { value: 'link' },
    IMAGE: { value: 'image' },
    QUOTE: { value: 'quote' },
    STATUS: { value: 'status' },
    VIDEO: { value: 'video' },
    AUDIO: { value: 'audio' },
  },
});

export default FORMAT;
