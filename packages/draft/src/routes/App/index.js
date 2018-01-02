import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import { settingsShape, socialSettingsShape } from 'types/PropTypes';
import Helmet from 'react-helmet-async';
import NotFound from 'components/NotFound';
import logo from 'public/logo.png';
import Home from './Home';
import Videos from './Videos';
import Video from './Video';
import Post from './Post';
import Sidebar from './Sidebar';
import Navigation from './Nav';
import {
  PageWrapper,
  Header,
  Title,
  Content,
  Primary,
  Secondary,
  Footer,
  SocialLinks,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
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
export default class App extends Component {
  static childContextTypes = {
    settings: settingsShape,
    socialSettings: socialSettingsShape,
  };

  getChildContext() {
    const { settings, socialSettings } = this.props.data;
    return { settings, socialSettings };
  }

  componentDidUpdate() {
    document.documentElement.scrollTop = 0;
  }

  render() {
    const { data: { loading, settings, socialSettings } } = this.props;

    if (loading && !settings) {
      return null;
    }

    const social = (
      <Fragment>
        {socialSettings.instagramUsername && (
          <InstagramIcon
            className="icon-font"
            href={`$https://instagram.com/${socialSettings.instagramUsername}`}
          />
        )}
        {socialSettings.twitterUsername && (
          <TwitterIcon
            className="icon-font"
            href={`https://twitter.com/${socialSettings.twitterUsername}`}
          />
        )}
        {socialSettings.facebookUrl && (
          <FacebookIcon className="icon-font" href={socialSettings.facebookUrl} />
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
            <Navigation />
          </Header>
          <Content>
            <Primary>
              <Switch>
                <Route exact path="/videos/:year(\d{4})?" component={Videos} />
                <Route path="/video/:slug" component={Video} />
                <Route path="/post/:slug" component={Post} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
              </Switch>
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
