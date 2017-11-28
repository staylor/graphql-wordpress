import React from 'react';
import styled from 'react-emotion';
import responsive from 'styles/responsive';

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: 0 ${p => p.theme.padding}px;
`;

export const Content = styled.div`
  padding: ${p => p.theme.padding}px 0;
  ${responsive.desktop} {
    display: flex;
    margin-right: ${p => p.theme.padding}px;
  }
`;

export const Primary = styled.section`
  ${responsive.desktop} {
    flex: 4;
  }
`;

export const Secondary = styled.section`
  display: block;
  min-height: 212px;
  min-width: 212px;
  ${responsive.desktop} {
    flex: 1;
  }
`;

const StyledFooter = styled.footer`
  padding: ${p => p.theme.padding}px 0;
  text-align: center;
`;

export const Footer = () => (
  <StyledFooter>
    © Scott Taylor ...&nbsp; Brooklyn, NY ...{' '}
    <a href="https://twitter.com/wonderboymusic">@wonderboymusic</a>&nbsp; ... Powered by GraphQL /
    React / Emotion
  </StyledFooter>
);
