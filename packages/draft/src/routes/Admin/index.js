import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import { PageWrapper, Flex, Nav, Content, NavLink, activeClassName, Dashicon } from './styled';
import VideoRouter from './Videos';
import TagRouter from './Tags';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

const routeConfig = [
  {
    path: '/',
    label: 'Dashboard',
    dashicon: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/video',
    label: 'Videos',
    dashicon: 'video-alt',
    component: VideoRouter,
  },
  { path: '/shows', label: 'Shows', dashicon: 'calendar', component: NotFound },
  { path: '/tag', label: 'Tags', dashicon: 'tag', component: TagRouter },
];

export default function Admin() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Flex>
          <Nav>
            {routeConfig.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.path === '/'}
                activeClassName={activeClassName}
              >
                {item.dashicon && (
                  <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />
                )}
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <Content>
            <Switch>
              {routeConfig.map(route => (
                <Route
                  key={route.label}
                  exact={route.path === '/'}
                  path={route.path}
                  component={route.component}
                />
              ))}
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Flex>
      </PageWrapper>
    </ThemeProvider>
  );
}
