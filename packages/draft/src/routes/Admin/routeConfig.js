import PostRouter from './Posts';
import VideoRouter from './Videos';
import TagRouter from './Tags';
import Dashboard from './Dashboard';
import Settings from './Settings';
import NotFound from './NotFound';

export default [
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
      path: '/video',
      label: 'Videos',
      dashicon: 'video-alt',
      component: VideoRouter,
    },
    {
      path: '/show',
      label: 'Shows',
      dashicon: 'calendar',
      component: NotFound,
    },
    {
      path: '/tag',
      label: 'Tags',
      dashicon: 'tag',
      component: TagRouter,
      routes: [
        {
          path: '/tag',
          label: 'All Tags',
        },
        {
          path: '/tag/add',
          label: 'Add New',
        },
      ],
    },
  ],
  [
    {
      path: '/settings',
      label: 'Settings',
      dashicon: 'admin-settings',
      component: Settings,
    },
  ],
];
