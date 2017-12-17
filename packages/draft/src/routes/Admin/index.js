import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import cn from 'classnames';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import theme from 'styles/theme';
import Loading from 'components/Loading';
import { settingsShape } from 'types/PropTypes';
import { PageWrapper, Flex, Content, collapsedNavClass } from './styled';
import NavMenu from './NavMenu';
import NotFound from './NotFound';
import routeConfig from './routeConfig';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query AdminQuery($id: String) {
      settings(id: $id) {
        id
        ... on SiteSettings {
          siteTitle
          siteUrl
          language
        }
      }
    }
  `,
  {
    options: {
      variables: { id: 'site' },
    },
  }
)
export default class Admin extends Component {
  static childContextTypes = {
    settings: settingsShape,
  };

  getChildContext() {
    return {
      settings: this.props.data.settings,
    };
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { data: { loading, settings } } = this.props;

    if (loading && !settings) {
      return <Loading />;
    }

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet defaultTitle={settings.siteTitle} titleTemplate={`%s » ${settings.siteTitle}`}>
            <html lang={settings.language} />
            <title>Admin</title>
          </Helmet>
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
