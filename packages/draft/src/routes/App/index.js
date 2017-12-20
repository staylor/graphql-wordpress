import React, { Component } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import logo from 'public/logo.png';
import Home from './Home';
import Videos from './Videos';
import Video from './Video';
import NotFound from './NotFound';
import Sidebar from './Sidebar';
import {
  PageWrapper,
  Header,
  Title,
  Content,
  Primary,
  PrimaryWrapper,
  Secondary,
  Footer,
} from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query AppQuery($id: String) {
      settings(id: $id) {
        ... on SiteSettings {
          siteTitle
          tagline
          siteUrl
          language
          copyrightText
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
@withRouter
export default class App extends Component {
  render() {
    const { data: { loading, settings } } = this.props;

    if (loading && !settings) {
      return null;
    }

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet defaultTitle={settings.siteTitle} titleTemplate={`%s » ${settings.siteTitle}`}>
            <html lang={settings.language} />
            <title>{settings.tagline}</title>
          </Helmet>
          <Header>
            <Title>
              <Link to="/">
                <img src={logo} alt={settings.siteTitle} />
              </Link>
            </Title>
          </Header>
          <Content>
            <Primary>
              <PrimaryWrapper>
                <Switch>
                  <Route exact path="/videos/:year(\d{4})?" component={Videos} />
                  <Route path="/video/:slug" component={Video} />
                  <Route path="/tag/:tag" component={Videos} />
                  <Route exact path="/" component={Home} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </PrimaryWrapper>
            </Primary>
            <Secondary>
              <Sidebar />
            </Secondary>
          </Content>
          <Footer dangerouslySetInnerHTML={{ __html: settings.copyrightText }} />
        </PageWrapper>
      </ThemeProvider>
    );
  }
}
