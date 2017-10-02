// @flow
import React from 'react';
import styled from 'react-emotion';
import { ThemeProvider, withTheme } from 'theming';
import theme from '../theme';
import responsive from '../responsive';
import '../global';
import Header from '../Header';
import Sidebar from '../Sidebar';

export { Header, Sidebar };

export const PageWrapper = withTheme(styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: 0 ${p => p.theme.padding}px;
`);

export const Content = withTheme(styled.div`
  padding: ${p => p.theme.padding}px 0;
  ${responsive.desktop} {
    display: flex;
    margin-right: ${p => p.theme.padding}px;
  }
`);

export const Primary = styled.section`${responsive.desktop} {flex: 4;}`;

export const Secondary = styled.section`
  display: block;
  min-height: 212px;
  min-width: 212px;
  ${responsive.desktop} {
    flex: 1;
  }
`;

const StyledFooter = withTheme(styled.footer`
  padding: ${p => p.theme.padding}px 0;
  text-align: center;
`);

export const Footer = () => (
  <StyledFooter>
    © Scott Taylor ...&nbsp; Brooklyn, NY ...{' '}
    <a href="https://twitter.com/wonderboymusic">@wonderboymusic</a>&nbsp; ... Powered by GraphQL /
    React / GraphQL / WordPress / Emotion
  </StyledFooter>
);

type AppProps = {
  settings: Object,
  navMenu: Object,
  sidebar: Object,
  children: any,
};

export default function App({ settings, navMenu, sidebar, children }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <Header {...{ settings, navMenu }} />
        <Content>
          <Primary>{children}</Primary>
          <Secondary>
            <Sidebar sidebar={sidebar} />
          </Secondary>
        </Content>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}
