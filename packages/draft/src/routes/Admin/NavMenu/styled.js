import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

export const Nav = styled.nav`
  background-color: ${p => p.theme.colors.background};
  bottom: -120px;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 160px;
  z-index: 3;
`;

export const navCollapsedClass = css`
  width: 36px;
`;

export const Separator = styled.i`
  display: block;
  height: 5px;
  margin: 0 0 6px 0;
`;

export const NavWrap = styled.div`
  margin: 3px 0;
  position: relative;
`;

export const NavLink = styled(RRNavLink)`
  box-sizing: border-box;
  color: ${p => p.theme.colors.dark};
  display: block;
  font-size: 14px;
  line-height: 18px;
  min-height: 34px;
  padding: 8px 0;
  position: relative;
  text-decoration: none;
  z-index: 3;

  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};

    &.NavLink-hasSubNav {
      &::after {
        border-right-color: ${theme.colors.dark};
      }
    }
  }

  &::after {
    border: 8px solid transparent;
    content: ' ';
    height: 0;
    margin-top: -8px;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    z-index: 10000;

    .NavMenu-collapsed & {
      border-width: 4px;
      margin-top: -4px;
    }
  }
`;

export const activeClass = css`
  background-color: ${theme.colors.pink};
  color: ${theme.colors.white};

  &:visited,
  &:link,
  &:active,
  &:hover {
    background-color: ${theme.colors.pink};
    color: ${theme.colors.white};
  }

  &::after {
    border-right-color: ${theme.colors.white};
  }

  &:hover {
    &.NavLink-hasSubNav {
      &::after {
        border-right-color: ${theme.colors.white};

        .NavMenu-collapsed & {
          border-right-color: ${theme.colors.dark};
        }
      }
    }
  }
`;

export const Dashicon = styled.i`
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  width: 36px;

  .${activeClass} & {
    color: ${p => p.theme.colors.white};
  }
`;
