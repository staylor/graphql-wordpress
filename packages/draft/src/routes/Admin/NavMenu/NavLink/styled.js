import styled from 'react-emotion';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

export const NavLink = styled(RRNavLink)`
  box-sizing: border-box;
  color: ${theme.colors.text};
  display: block;
  font-size: 14px;
  line-height: 18px;
  min-height: 34px;
  padding: 8px 0;
  position: relative;
  text-decoration: none;
  z-index: 3;

  &.NavLink-hovered {
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};

    &.NavLink-hasSubNav {
      &::after {
        border-right-color: ${theme.colors.dark};
      }

      &.NavLink-active {
        background-color: ${theme.colors.dark};
        color: ${theme.colors.white};

        &::after {
          border-right-color: ${theme.colors.white};
        }

        &.NavLink-collapsed {
          &::after {
            border-right-color: ${theme.colors.dark};
          }
        }

        @media screen and (max-width: 782px) {
          &::after {
            border-right-color: ${theme.colors.dark};
          }
        }
      }
    }
  }

  span {
    @media screen and (max-width: 782px) {
      display: none;
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

    @media screen and (max-width: 782px) {
      border-width: 4px;
      margin-top: -4px;
    }
  }
`;

export const activeClass = css`
  background-color: ${theme.colors.dark};
  color: ${theme.colors.white};

  &:visited,
  &:link,
  &:active,
  &:hover {
    background-color: ${theme.colors.dark};
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
    color: ${theme.colors.white};
  }
`;
