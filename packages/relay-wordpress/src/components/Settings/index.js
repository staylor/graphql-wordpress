// @flow
import * as React from 'react';
import Helmet from 'react-helmet';
import { injectIntl } from 'react-intl';
import type { intlShape } from 'react-intl';
import { SITE_URL, SITE_DESCRIPTION, TWITTER_USERNAME, TWITTER_CREATOR } from 'utils/constants';

type SettingsProps = {
  intl: intlShape,
  settings: {
    title: string,
    description: string,
    language: string,
  },
};

function Settings(props: SettingsProps) {
  const { settings, intl: { locale } } = props;

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

export default injectIntl(Settings);
