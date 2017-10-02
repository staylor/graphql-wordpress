import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { intlShape } from 'react-intl';
import withIntl from 'decorators/withIntl';
import { SITE_URL, SITE_DESCRIPTION, TWITTER_USERNAME, TWITTER_CREATOR } from 'utils/constants';

@withIntl
export default class Settings extends Component {
  static propTypes = {
    intl: intlShape.isRequired,
    settings: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      language: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { settings, intl: { locale } } = this.props;

    return (
      <Helmet titleTemplate={`%s - ${settings.title}`} defaultTitle={settings.title}>
        <html lang={locale} prefix="og: http://ogp.me/ns#" />
        <title>{settings.description}</title>
        <meta httpEquiv="Content-Language" content={locale} />
        <meta property="og:site_name" content={settings.title} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={settings.language} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={TWITTER_USERNAME} />
        <meta name="twitter:creator" content={TWITTER_CREATOR} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
      </Helmet>
    );
  }
}
