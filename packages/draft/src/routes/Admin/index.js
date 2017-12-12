import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import cn from 'classnames';
import theme from 'styles/theme';
import 'styles/inject';
import { PageWrapper, Flex, Content, collapsedNavClass } from './styled';
import NavMenu from './NavMenu';
import PostRouter from './Posts';
import VideoRouter from './Videos';
import TagRouter from './Tags';
import Dashboard from './Dashboard';
import Settings from './Settings';
import NotFound from './NotFound';

/* eslint-disable react/prop-types */

const routeConfig = [
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

export default class Admin extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Flex>
            <NavMenu
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              routeConfig={routeConfig}
            />
            <Content
              className={cn({
                [collapsedNavClass]: this.state.collapsed,
              })}
            >
              <Switch>
                {routeConfig.map(section =>
                  section.map(route => (
                    <Route
                      key={route.label}
                      exact={route.path === '/'}
                      path={route.path}
                      component={route.component}
                    />
                  ))
                )}
                <Route path="*" component={NotFound} />
              </Switch>
            </Content>
          </Flex>
        </PageWrapper>
      </ThemeProvider>
    );
  }
}
