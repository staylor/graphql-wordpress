import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

const flyout = css`
  background-color: ${theme.colors.dark};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: block;
  min-width: 160px;
  position: absolute;
  top: -1px;
  width: auto;
  z-index: 100000;
`;

export const SubNav = styled.nav`
  background-color: ${theme.colors.white};
  display: none;
  left: 160px;
  padding: 7px 0 8px;

  &.SubNav-active {
    display: block;

    @media screen and (max-width: 782px) {
      display: none;
    }
  }

  &.SubNav-collapsed {
    display: none;
    left: 36px;
  }

  @media screen and (max-width: 782px) {
    display: none;
    left: 36px;
  }

  &.SubNav-flyout {
    ${flyout};
  }

  &.SubNav-hovered {
    @media screen and (max-width: 782px) {
      ${flyout};
    }
  }
`;

export const SubNavLink = styled(RRNavLink)`
  color: ${theme.colors.dark};
  display: block;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 1.2;
  padding: 6px 12px;
  text-decoration: none;

  &:hover,
  &:active {
    color: ${theme.colors.black};
  }

  .SubNav-flyout & {
    color: ${theme.colors.white};

    &:hover,
    &:active {
      color: ${theme.colors.pink};
    }
  }
`;

export const subNavActiveClass = css`
  color: ${theme.colors.black};
  font-weight: ${theme.fonts.weight.bold};

  &:hover,
  &:active {
    color: ${theme.colors.pink};
  }
`;
