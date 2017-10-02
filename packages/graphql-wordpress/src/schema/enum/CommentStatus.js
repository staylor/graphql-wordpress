import { GraphQLEnumType } from 'graphql';

const COMMENT_STATUS = new GraphQLEnumType({
  name: 'COMMENT_STATUS',
  description: 'Whether or not comments are open on the object.',
  values: {
    OPEN: { value: 'open' },
    CLOSED: { value: 'closed' },
  },
});

export default COMMENT_STATUS;
