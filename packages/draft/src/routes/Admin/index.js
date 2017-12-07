import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import { PageWrapper, Flex, Content, foldedNavClass } from './styled';
import NavMenu from './NavMenu';
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
      path: '/video',
      label: 'Videos',
      dashicon: 'video-alt',
      component: VideoRouter,
    },
    {
      path: '/shows',
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
    folded: false,
  };

  onFolded = folded => {
    this.setState({ folded });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Flex>
            <NavMenu
              folded={this.state.folded}
              onFolded={this.onFolded}
              routeConfig={routeConfig}
            />
            <Content className={this.state.folded && foldedNavClass}>
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
