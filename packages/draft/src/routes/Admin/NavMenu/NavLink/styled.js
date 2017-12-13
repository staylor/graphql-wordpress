import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

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

  &.NavLink-hovered {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};

    &.NavLink-hasSubNav {
      &::after {
        border-right-color: ${p => p.theme.colors.dark};
      }

      &.NavLink-active {
        &::after {
          border-right-color: ${p => p.theme.colors.white};
        }

        &.NavLink-collapsed {
          &::after {
            border-right-color: ${p => p.theme.colors.dark};
          }
        }
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
`;

export const Dashicon = styled.i`
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  width: 36px;

  .NavLink-active & {
    color: ${p => p.theme.colors.white};
  }
`;
