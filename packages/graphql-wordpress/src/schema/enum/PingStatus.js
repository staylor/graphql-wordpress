import { GraphQLEnumType } from 'graphql';

const PING_STATUS = new GraphQLEnumType({
  name: 'PING_STATUS',
  description: 'Whether or not the object can be pinged.',
  values: {
    OPEN: { value: 'open' },
    CLOSED: { value: 'closed' },
  },
});

export default PING_STATUS;
