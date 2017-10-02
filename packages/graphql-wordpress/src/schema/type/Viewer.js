import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql';
import { globalIdField, fromGlobalId } from 'graphql-relay';
import PostType from 'type/Post';
import PageType from 'type/Page';
import MediaType from 'type/Media';
import CategoryType from 'type/Category';
import TagType from 'type/Tag';
import NavMenuType from 'type/NavMenu';
import SidebarType from 'type/Sidebar';
import UserType from 'type/User';
import postConnection from 'connection/Post';
import SettingsType from 'type/Settings';
import ChartType from 'type/Chart';
import TermInterface from 'interface/Term';
import { id, slug } from 'field/identifier';

const itemResolver = (dataType, loader) => ({
  type: dataType,
  args: {
    ...id,
    ...slug,
  },
  resolve: (root, { id: globalId, slug: slugParam }, context, { rootValue: { loaders } }) => {
    if (slugParam && loaders[loader].loadBySlug) {
      return loaders[loader].loadBySlug(slugParam);
    }
    return loaders[loader].load(fromGlobalId(globalId).id);
  },
});

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: () => {
    const fields = {
      id: globalIdField(),
      post: itemResolver(PostType, 'Post'),
      page: itemResolver(PageType, 'Page'),
      media: itemResolver(MediaType, 'Media'),
      category: itemResolver(CategoryType, 'Category'),
      tag: itemResolver(TagType, 'Tag'),
      author: itemResolver(UserType, 'User'),
      navMenu: itemResolver(NavMenuType, 'NavMenu'),
      sidebar: itemResolver(SidebarType, 'Sidebar'),
      term: {
        type: TermInterface,
        args: {
          slug: {
            ...slug,
            type: new GraphQLNonNull(GraphQLString),
          },
          taxonomy: {
            type: new GraphQLNonNull(GraphQLString),
          },
        },
        resolve: (
          root,
          { slug: slugParam, taxonomy },
          context,
          { rootValue: { loaders: { Category, Tag } } }
        ) => {
          switch (taxonomy) {
            case 'category':
              return Category.loadBySlug(slugParam);
            case 'tag':
              return Tag.loadBySlug(slugParam);
            default:
              return null;
          }
        },
      },
      posts: postConnection,
      settings: {
        type: SettingsType,
        resolve: (root, args, context, { rootValue: { loaders: { Settings } } }) => Settings.load(),
      },
      chart: {
        type: ChartType,
        resolve: (root, args, context, { rootValue: { loaders: { Chart } } }) => Chart.load(),
      },
    };

    return fields;
  },
});

export default ViewerType;
