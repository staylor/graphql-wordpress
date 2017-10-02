import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import ChartItemImageType from './ChartItemImage';

const ChartItemType = new GraphQLObjectType({
  name: 'ChartItem',
  description: 'An item in the iTunes chart.',
  fields: {
    title: {
      type: GraphQLString,
      description: 'Album title.',
      resolve: item => item['im:name'].label,
    },
    artist: {
      type: GraphQLString,
      description: 'Artist title.',
      resolve: item => item['im:artist'].label,
    },
    releaseDate: {
      type: GraphQLString,
      description: 'Album release date in ISO format.',
      resolve: item => item['im:releaseDate'].label,
    },
    releaseDateFormatted: {
      type: GraphQLString,
      description: 'Album release date, formatted for display.',
      resolve: item => item['im:releaseDate'].attributes.label,
    },
    url: {
      type: GraphQLString,
      description: 'Album URL.',
      resolve: item => item.link.attributes.href,
    },
    copyright: {
      type: GraphQLString,
      description: 'Chart copyright notice.',
      resolve: item => item.rights.label,
    },
    images: {
      type: new GraphQLList(ChartItemImageType),
      description: 'Item images.',
      resolve: item => item['im:image'],
    },
  },
});

export default ChartItemType;
