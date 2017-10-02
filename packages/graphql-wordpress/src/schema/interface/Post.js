import { GraphQLInterfaceType, GraphQLNonNull, GraphQLID, GraphQLList } from 'graphql';
import UserType from 'type/User';
import MediaType from 'type/Media';
import Meta from 'type/Meta';
import { slug, guid, link } from 'field/identifier';
import { date, modified } from 'field/date';
import { commentStatus, pingStatus } from 'field/status';
import { title, content, excerpt } from 'field/content';
import { type, template } from 'field/post';

const PostInterface = new GraphQLInterfaceType({
  name: 'PostInterface',
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
    ...content,
    ...excerpt,
    ...commentStatus,
    ...pingStatus,
    ...template,
    meta: { type: new GraphQLList(Meta) },
    author: { type: UserType },
    featuredMedia: { type: MediaType },
  },
});

export default PostInterface;
