import { ObjectId } from 'mongodb';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { merge } from 'lodash';
import { requireModules } from 'server/graphql/utils';

const modules = requireModules(__dirname);
const resolvers = Object.keys(modules).reduce((memo, name) => {
  merge(memo, modules[name]);
  return memo;
}, {});

resolvers.ObjID = new GraphQLScalarType({
  name: 'ObjID',
  description: 'Id representation, based on Mongo Object Ids',
  parseValue(value) {
    return ObjectId(value);
  },
  serialize(value) {
    return value.toString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ObjectId(ast.value);
    }
    return null;
  },
});

export default resolvers;

// resolvers.Viewer = Object.assign({}, resolvers.Query);
// resolvers.Viewer.id = () => 'me';
