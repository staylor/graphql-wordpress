import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import Home from 'routes/Home';
import Video from 'routes/Video';
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

// eslint-disable-next-line
injectGlobal`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.body};
    font-size: 13px;
    line-height: 18px;
    padding: 0 ${theme.padding}px;
    text-rendering: optimizeLegibility;
  }

  iframe {
    max-width: 100%;
  }

  a {
    color: ${theme.colors.pink};
  }

  blockquote {
    margin: 0 ${theme.padding}px;
  }

  em {
    text-decoration: underline;
  }

  strong {
    font-weight: ${theme.weightBold};
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header>
          <Title>
            <Link to="/">High for This.</Link>
          </Title>
        </Header>
        <Content>
          <Primary>
            <PrimaryWrapper>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/video/:slug" component={Video} />
              </Switch>
            </PrimaryWrapper>
          </Primary>
          <Secondary>SECONDARY</Secondary>
        </Content>
        <Footer>
          © Scott Taylor ...&nbsp; Brooklyn, NY ...{' '}
          <a href="https://twitter.com/wonderboymusic">@wonderboymusic</a>&nbsp; ... Powered by
          GraphQL / React / Emotion
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  );
}
