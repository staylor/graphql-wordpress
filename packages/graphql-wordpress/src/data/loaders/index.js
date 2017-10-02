import getPostLoaders from './Post';
import getPageLoaders from './Page';
import getTaxonomyLoaders from './Taxonomy';
import getCategoryLoaders from './Category';
import getCommentLoaders from './Comment';
import getMediaLoaders from './Media';
import getNavMenuLoaders from './NavMenu';
import getUserLoaders from './User';
import getSettingsLoaders from './Settings';
import getSidebarLoaders from './Sidebar';
import getTagLoaders from './Tag';
import getChartLoaders from './Chart';

export default function getLoaders() {
  return {
    Post: getPostLoaders(),
    Page: getPageLoaders(),
    Taxonomy: getTaxonomyLoaders(),
    Category: getCategoryLoaders(),
    Comment: getCommentLoaders(),
    Media: getMediaLoaders(),
    NavMenu: getNavMenuLoaders(),
    User: getUserLoaders(),
    Settings: getSettingsLoaders(),
    Sidebar: getSidebarLoaders(),
    Tag: getTagLoaders(),
    Chart: getChartLoaders(),
  };
}
