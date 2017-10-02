import { nodeDefinitions, fromGlobalId } from 'graphql-relay';

const registeredTypes = {};

export function registerNodeType(type) {
  registeredTypes[type.name] = type;
  return type;
}

export const {
  nodeInterface: NodeInterface,
  nodeField,
} = nodeDefinitions((globalId, context, { rootValue: { loaders } }) => {
  const { id, type } = fromGlobalId(globalId);
  return loaders[type] ? loaders[type].load(id) : null;
}, obj => registeredTypes[obj.constructor.name] || null);
