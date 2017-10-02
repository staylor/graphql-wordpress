import { GraphQLList } from 'graphql';
import Meta from 'type/Meta';

const metaResolver = data => {
  if (!data.meta || !Object.keys(data.meta).length) {
    return null;
  }
  return Object.keys(data.meta).map(key => ({
    name: key,
    value: data.meta[key],
  }));
};

export default () => ({
  type: new GraphQLList(Meta),
  description: 'Meta fields.',
  resolve: metaResolver,
});
