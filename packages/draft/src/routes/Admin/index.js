import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import { PageWrapper, Header, Title, Flex, Nav, Content, NavLink, activeClassName } from './styled';
import Video from './Video';
import Videos from './Videos';
import Home from './Home';
import NotFound from './NotFound';

export default function Admin() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header>
          <Title>
            <Link to="/">DRAFT ADMIN</Link>
          </Title>
        </Header>
        <Flex>
          <Nav>
            {[{ path: '/video', label: 'Videos' }, { path: '/shows', label: 'Shows' }].map(item => (
              <NavLink key={item.path} to={item.path} activeClassName={activeClassName}>
                {item.label}
              </NavLink>
            ))}
          </Nav>
          <Content>
            <Switch>
              <Route path="/video/page/:page(\d+)" component={Videos} />
              <Route path="/video/:id" component={Video} />
              <Route path="/video" component={Videos} />
              <Route exact path="/" component={Home} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Content>
        </Flex>
      </PageWrapper>
    </ThemeProvider>
  );
}
