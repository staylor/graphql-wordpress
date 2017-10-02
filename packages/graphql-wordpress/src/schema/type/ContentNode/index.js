import { GraphQLUnionType } from 'graphql';

import ElementType from 'type/ContentNode/Element';
import TextType from 'type/ContentNode/Text';
import EmbedType from 'type/ContentNode/Embed';

const ContentNodeType = new GraphQLUnionType({
  name: 'ContentNode',
  types: [ElementType, TextType, EmbedType],
});

export default ContentNodeType;
