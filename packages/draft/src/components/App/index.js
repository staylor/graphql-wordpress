import React from 'react';
import { Route } from 'react-router';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import theme from 'styles/theme';
import Videos from 'components/Videos';
import { PageWrapper, Content, Primary, Secondary, Footer } from './styled';

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
        <Content>
          <Primary>
            <Route exact path="/" component={Videos} />
          </Primary>
          <Secondary>SECONDARY</Secondary>
        </Content>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}
