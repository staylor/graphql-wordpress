import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

const flyout = css`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: block;
  min-width: 160px;
  position: absolute;
  top: -1px;
  width: auto;
  z-index: 100000;
`;

export const SubNav = styled.nav`
  background-color: ${p => p.theme.colors.dark};
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
  color: ${p => p.theme.colors.detail};
  display: block;
  font-size: 13px;
  letter-spacing: 0.3px;
  line-height: 1.2;
  padding: 6px 12px;
  text-decoration: none;
`;

export const subNavActiveClass = css`
  color: ${theme.colors.white};
  font-weight: 600;
`;
