import { GraphQLNonNull, GraphQLID } from 'graphql';
import { toGlobalId } from 'graphql-relay';
import { date, modified } from 'field/date';
import metaField from 'field/meta';
import { globalIdField, slug, guid, link } from 'field/identifier';
import { title } from 'field/content';
import { type, template } from 'field/post';
import { commentStatus, pingStatus } from 'field/status';
import { description, caption, altText, mediaType, mimeType, sourceUrl } from 'field/media';
import author from 'field/author';

export default {
  id: globalIdField(),
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
  ...author,
  meta: metaField(),
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
    resolve: data => toGlobalId('Post', data.post),
  },
};
