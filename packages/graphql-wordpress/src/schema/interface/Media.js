import { GraphQLInterfaceType, GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import UserType from 'type/User';
import Meta from 'type/Meta';
import { slug, guid, link } from 'field/identifier';
import { date, modified } from 'field/date';
import { commentStatus, pingStatus } from 'field/status';
import { title } from 'field/content';
import { type, template } from 'field/post';
import { description, caption, altText, mediaType, mimeType, sourceUrl } from 'field/media';

const MediaInterface = new GraphQLInterfaceType({
  name: 'MediaInterface',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'Unique identifier for the object.',
    },
    ...date,
    ...guid,
    ...modified,
    ...slug,
    ...type,
    ...link,
    ...title,
    ...commentStatus,
    ...pingStatus,
    ...template,
    meta: { type: new GraphQLList(Meta) },
    author: { type: UserType },
    // featured_media (this field should exist for audio/video)
    // extra media fields
    ...description,
    ...caption,
    ...altText,
    ...mediaType,
    ...mimeType,
    ...sourceUrl,
    post: {
      type: new GraphQLNonNull(GraphQLID),
      description: 'The ID for the associated post of the attachment.',
    },
  },
});

export default MediaInterface;
