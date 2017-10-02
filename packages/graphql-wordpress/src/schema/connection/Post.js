import { GraphQLString, GraphQLID, GraphQLInt, GraphQLBoolean } from 'graphql';
import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArraySlice,
  fromGlobalId,
  cursorToOffset,
} from 'graphql-relay';
import PostType from 'type/Post';
import Post from 'data/Post';
import POST_ORDERBY from 'enum/PostOrderby';
import ORDER from 'enum/Order';

const { connectionType: PostConnection } = connectionDefinitions({
  nodeType: PostType,
});

export { PostConnection };

export default {
  type: PostConnection,
  args: {
    sticky: {
      type: GraphQLBoolean,
      description: 'Limit result set to items that are sticky.',
    },
    year: {
      type: GraphQLInt,
      description: 'Limit result set to items that are from a certain year.',
    },
    month: {
      type: GraphQLInt,
      description: 'Limit result set to items that are from a certain month.',
    },
    day: {
      type: GraphQLInt,
      description: 'Limit result set to items that are from a certain day.',
    },
    search: {
      type: GraphQLString,
      description: 'Limit results to those matching a string.',
    },
    author: {
      type: GraphQLID,
      description: 'Limit result set to items assigned to specific author.',
    },
    slug: {
      type: GraphQLString,
      description:
        'Limit result set to items with one or more specific slugs (value or comma-separated values).',
    },
    // value or comma-separated values
    category: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the specified term assigned in the categories taxonomy.',
    },
    categories: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the specified terms assigned in the categories taxonomy.',
    },
    tag: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the specified term assigned in the tags taxonomy.',
    },
    tags: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the specified terms assigned in the tags taxonomy.',
    },
    term: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the specified term assigned in the also-specified taxonomy.',
    },
    taxonomy: {
      type: GraphQLString,
      description:
        'Limit result set to all items that have the also-specified term assigned in this taxonomy.',
    },
    orderby: {
      type: POST_ORDERBY,
      description: 'Sort collection by object attribute.',
    },
    order: {
      type: ORDER,
      description: 'Order sort attribute ascending or descending.',
    },
    ...connectionArgs,
  },
  description: 'A list of results',
  resolve: (root, args) => {
    const connectionArguments = {};
    const params = Object.assign({}, args);
    if (typeof params.search !== 'undefined' && !params.search) {
      return null;
    }

    if (params.first) {
      params.per_page = params.first;
      connectionArguments.first = params.first;
    } else {
      params.per_page = 10;
    }

    if (params.after) {
      params.offset = cursorToOffset(params.after) + 1;
    }

    const setFilter = (arg, restArg = null) => {
      if (params[arg]) {
        if (!params.filter) {
          params.filter = {};
        }
        params.filter[restArg || arg] = params[arg];
        delete params[arg];
      }
    };

    if (params.taxonomy && params.term) {
      if (params.taxonomy === 'category') {
        setFilter('term', 'category_name');
      } else if (params.taxonomy === 'tag') {
        setFilter('term', 'tag');
      }
    } else {
      // query by category slug
      setFilter('category', 'category_name');
      // query by tag slug
      setFilter('tag');
    }

    // query by year
    setFilter('year');
    // query by month
    setFilter('month', 'monthnum');
    // query by day
    setFilter('day');

    ['categories', 'tags', 'author'].forEach(key => {
      if (params[key]) {
        params[key] = params[key].split(',').map(value => fromGlobalId(value).id);
      }
    });

    delete params.first;
    delete params.last;
    delete params.after;
    delete params.before;

    return Post.collection(params).then(({ items, total }) =>
      connectionFromArraySlice(items, connectionArguments, {
        arrayLength: total ? parseInt(total, 10) : items.length,
        sliceStart: params.offset || 0,
      })
    );
  },
};
