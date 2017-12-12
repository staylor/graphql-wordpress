import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

export const SubNav = styled.nav`
  background-color: ${p => p.theme.colors.dark};
  display: none;
  padding: 7px 0 8px;

  &.SubNav-active {
    display: block;
  }

  &.SubNav-flyout {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    display: block;
    left: 160px;
    min-width: 160px;
    position: absolute;
    top: -1px;
    width: auto;
    z-index: 100000;
  }

  .NavMenu-collapsed & {
    display: none;
    left: 36px;

    &.SubNav-flyout {
      display: block;
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
