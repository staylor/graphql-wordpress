import React, { Component, Fragment } from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import 'styles/inject';
import { settingsShape, socialSettingsShape } from 'types/PropTypes';
import logo from 'public/logo.png';
import Home from './Home';
import Videos from './Videos';
import Video from './Video';
import Post from './Post';
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
  SocialLinks,
  SocialIcon,
  FooterLinks,
} from './styled';

/* eslint-disable react/prop-types */

@graphql(
  gql`
    query AppQuery {
      settings(id: "site") {
        ... on SiteSettings {
          siteTitle
          tagline
          siteUrl
          language
          copyrightText
        }
      }
      socialSettings: settings(id: "social") {
        ... on SocialSettings {
          facebookUrl
          facebookAppId
          twitterUsername
          instagramUsername
        }
      }
    }
  `
)
@withRouter
export default class App extends Component {
  static childContextTypes = {
    settings: settingsShape,
    socialSettings: socialSettingsShape,
  };

  getChildContext() {
    const { settings, socialSettings } = this.props.data;
    return { settings, socialSettings };
  }

  render() {
    const { data: { loading, settings, socialSettings } } = this.props;

    if (loading && !settings) {
      return null;
    }

    const social = (
      <Fragment>
        {socialSettings.instagramUsername && (
          <SocialIcon
            className="icons-instagram"
            href={`$https://instagram.com/${socialSettings.instagramUsername}`}
          />
        )}
        {socialSettings.twitterUsername && (
          <SocialIcon
            className="icons-twitter"
            href={`https://twitter.com/${socialSettings.twitterUsername}`}
          />
        )}
        {socialSettings.facebookUrl && (
          <SocialIcon className="icons-facebook" href={socialSettings.facebookUrl} />
        )}
      </Fragment>
    );

    return (
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <Helmet defaultTitle={settings.siteTitle} titleTemplate={`%s » ${settings.siteTitle}`}>
            <html lang={settings.language} />
            <title>{settings.tagline}</title>
            <link rel="canonical" href={settings.siteUrl} />
            {socialSettings.facebookAppId && (
              <meta property="fb:app_id" content={socialSettings.facebookAppId} />
            )}
            <meta property="og:site_name" content={settings.siteTitle} />
          </Helmet>
          <Header>
            <Title>
              <Link to="/">
                <img src={logo} alt={settings.siteTitle} />
              </Link>
            </Title>
            <SocialLinks>{social}</SocialLinks>
          </Header>
          <Content>
            <Primary>
              <PrimaryWrapper>
                <Switch>
                  <Route exact path="/videos/:year(\d{4})?" component={Videos} />
                  <Route path="/video/:slug" component={Video} />
                  <Route path="/post/:slug" component={Post} />
                  <Route exact path="/" component={Home} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </PrimaryWrapper>
            </Primary>
            <Secondary>
              <Sidebar />
            </Secondary>
          </Content>
          <FooterLinks>{social}</FooterLinks>
          <Footer dangerouslySetInnerHTML={{ __html: settings.copyrightText }} />
        </PageWrapper>
      </ThemeProvider>
    );
  }
}
