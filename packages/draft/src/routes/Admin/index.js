import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { cx } from 'emotion';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet-async';
import theme from 'styles/theme';
import Loading from 'components/Loading';
import NotFound from 'components/NotFound';
import { settingsShape, mediaSettingsShape } from 'types/PropTypes';
import { PageWrapper, Flex, Content, collapsedNavClass, AtomicToolbar } from './styled';
import NavMenu from './NavMenu';
import routeConfig from './routeConfig';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query AdminQuery {
      settings(id: "site") {
        ... on SiteSettings {
          siteTitle
          siteUrl
          language
        }
      }
      mediaSettings: settings(id: "media") {
        ... on MediaSettings {
          crops {
            name
            width
            height
          }
        }
      }
      taxonomies @connection(key: "taxonomies") {
        edges {
          node {
            id
            name
            plural
            slug
          }
        }
      }
    }
  `
)
export default class Admin extends Component {
  static childContextTypes = {
    settings: settingsShape,
    mediaSettings: mediaSettingsShape,
  };

  getChildContext() {
    return {
      settings: this.props.data.settings,
      mediaSettings: this.props.data.mediaSettings,
    };
  }

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    const { data: { loading, settings, taxonomies } } = this.props;

    if (loading && !settings) {
      return <Loading />;
    }

    const routes = routeConfig({
      taxonomies: taxonomies.edges.map(({ node }) => node),
    });

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet defaultTitle={settings.siteTitle} titleTemplate={`%s » ${settings.siteTitle}`}>
            <html lang={settings.language} />
            <title>Admin</title>
          </Helmet>
          <Flex>
            <div id="portal" />
            <AtomicToolbar id="atomicToolbar" />
            <NavMenu
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
              routeConfig={routes}
            />
            <Content
              className={cx({
                [collapsedNavClass]: this.state.collapsed,
              })}
            >
              <Switch>
                {routes.map(section =>
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
