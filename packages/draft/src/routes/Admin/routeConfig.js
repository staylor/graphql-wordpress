import PostRouter from './Posts';
import MediaRouter from './Media';
import VideoRouter from './Videos';
import ShowRouter from './Shows';
import TaxonomyRouter from './Taxonomies';
import TermRouter from './Terms';
import Dashboard from './Dashboard';
import UserRouter from './Users';
import SettingsRouter from './Settings';

export default ({ taxonomies = [] }) => {
  const taxRoutes = taxonomies.map(taxonomy => ({
    path: `/terms/${taxonomy.id}`,
    label: taxonomy.plural,
    dashicon: 'tag',
    component: TermRouter,
    routes: [
      {
        path: `/terms/${taxonomy.id}`,
        label: `All ${taxonomy.plural}`,
      },
      {
        path: `/terms/${taxonomy.id}/add`,
        label: 'Add New',
      },
    ],
  }));

  return [
    [
      {
        path: '/',
        label: 'Dashboard',
        dashicon: 'dashboard',
        component: Dashboard,
      },
    ],
    [
      {
        path: '/post',
        label: 'Posts',
        dashicon: 'admin-post',
        component: PostRouter,
        routes: [
          {
            path: '/post',
            label: 'All Posts',
          },
          {
            path: '/post/add',
            label: 'Add New',
          },
        ],
      },
      {
        path: '/media',
        label: 'Media',
        dashicon: 'admin-media',
        component: MediaRouter,
        routes: [
          {
            path: '/media',
            label: 'All Media',
          },
          {
            path: '/media/upload',
            label: 'Upload Media',
          },
        ],
      },
    ],
    [
      {
        path: '/video',
        label: 'Videos',
        dashicon: 'video-alt',
        component: VideoRouter,
      },
      {
        path: '/show',
        label: 'Shows',
        dashicon: 'calendar',
        component: ShowRouter,
        routes: [
          {
            path: '/show',
            label: 'All Shows',
          },
          {
            path: '/show/add',
            label: 'Add New',
          },
        ],
      },
    ],
    [
      {
        path: '/taxonomy',
        label: 'Taxonomies',
        dashicon: 'category',
        component: TaxonomyRouter,
        routes: [
          {
            path: '/taxonomy',
            label: 'All Taxonomies',
          },
          {
            path: '/taxonomy/add',
            label: 'Add New',
          },
        ],
      },
      ...taxRoutes,
    ],
    [
      {
        path: '/user',
        label: 'Users',
        dashicon: 'admin-users',
        component: UserRouter,
        routes: [
          {
            path: '/user',
            label: 'All Users',
          },
          {
            path: '/user/add',
            label: 'Add User',
          },
        ],
      },
      {
        path: '/settings',
        label: 'Settings',
        dashicon: 'admin-settings',
        component: SettingsRouter,
        routes: [
          {
            path: '/settings/site',
            label: 'General',
          },
          {
            path: '/settings/dashboard',
            label: 'Dashboard',
          },
          {
            path: '/settings/social',
            label: 'Social',
          },
          {
            path: '/settings/media',
            label: 'Media',
          },
        ],
      },
    ],
  ];
};
