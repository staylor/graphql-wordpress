import React from 'react';
import { Link } from 'found';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import responsive from '../responsive';
import NavMenu from '../NavMenu';

export const Masthead = withTheme(styled.header`
  background: ${p => p.theme.colors.white};
  border-top: 2px solid ${p => p.theme.colors.topBorder};
  max-width: ${p => p.theme.contentWidth}px;
  padding-top: ${p => p.theme.padding * 1.5}px;
  position: relative;
  width: 100%;
  z-index: 9999;
`);

export const Title = withTheme(styled.h1`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fonts.futura};
  font-size: 48px;
  font-weight: ${p => p.theme.weightBold};
  line-height: 72px;

  & a {
    color: ${p => p.theme.colors.black};
    text-decoration: none;
  }

  ${responsive.tablet} {
    font-size: 56px;
  }
`);

export const Description = withTheme(styled.h2`
  color: ${p => p.theme.colors.subhead};
  font-family: ${p => p.theme.fonts.futura};
  font-size: 18px;
  left: 0;
  line-height: 18px;
  position: absolute;
  right: 32px;
  top: ${p => p.theme.padding / 2}px;

  ${responsive.tablet} {
    font-size: 24px;
    left: auto;
    line-height: 24px;
    right: ${p => p.theme.padding * 2}px;
    top: ${p => p.theme.padding * 3.5}px;
  }
`);

type HeaderProps = {
  settings: {
    title: string,
    description: string,
  },
  navMenu: Object,
};

const Header = ({ settings, navMenu }: HeaderProps) => (
  <Masthead role="banner">
    <Title>
      <Link to="/">{settings.title}</Link>
    </Title>
    <Description>{settings.description}</Description>
    <NavMenu navMenu={navMenu} />
  </Masthead>
);

export default Header;
