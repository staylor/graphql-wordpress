import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import ChartItemType from './ChartItem';

const ChartType = new GraphQLObjectType({
  name: 'Chart',
  description: 'iTunes chart data.',
  fields: {
    title: {
      type: GraphQLString,
      description: 'Chart title.',
      resolve: chart => chart.title.label,
    },
    copyright: {
      type: GraphQLString,
      description: 'Chart copyright notice.',
      resolve: chart => chart.rights.label,
    },
    updated: {
      type: GraphQLString,
      description: 'Last updated timestamp.',
      resolve: chart => chart.updated.label,
    },
    authorName: {
      type: GraphQLString,
      description: 'Chart author name.',
      resolve: chart => chart.author.name.label,
    },
    authorUri: {
      type: GraphQLString,
      description: 'Chart author URI.',
      resolve: chart => chart.author.uri.label,
    },
    items: {
      type: new GraphQLList(ChartItemType),
      description: 'Chart items.',
      resolve: chart => chart.entry,
    },
  },
});

export default ChartType;
