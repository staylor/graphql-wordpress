import styled from 'react-emotion';
import theme from 'styled-theming';
import { css } from 'emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import themeUtils from 'styles/theme';

const mediumQuery = `@media screen and (max-width: ${themeUtils.breakpoint.medium}px)`;

const afterCollapsed = {
  border: '4px solid transparent',
  margin: '-4px 0 0',
};

const afterStyles = theme('collapsed', {
  open: ({ theme: { isHovered, hasSubNav } }) => {
    const styles = {
      border: '8px solid transparent',
      margin: '-8px 0 0',
    };
    if (isHovered && hasSubNav) {
      styles.borderRightColor = themeUtils.colors.dark;
    }
    return styles;
  },
  collapsed: {
    border: '4px solid transparent',
    margin: '-4px 0 0',
  },
});

const linkStyles = theme('hovered', {
  default: {
    color: themeUtils.colors.text,
  },
  hovered: {
    backgroundColor: themeUtils.colors.white,
    color: themeUtils.colors.black,
  },
});

export const NavLink = styled(RRNavLink)`
  ${linkStyles};
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  line-height: 18px;
  min-height: 34px;
  padding: 8px 0;
  position: relative;
  text-decoration: none;
  z-index: 3;

  &:hover {
    color: ${themeUtils.colors.black};
  }

  &.NavLink-active {
    background-color: ${themeUtils.colors.dark};
    color: ${themeUtils.colors.white};

    &:visited,
    &:link,
    &:active,
    &:hover {
      background-color: ${themeUtils.colors.dark};
      color: ${themeUtils.colors.white};
    }
  }

  span {
    ${({ theme: { isCollapsed } }) => isCollapsed && { display: 'none' }};

    ${mediumQuery} {
      display: none;
    }
  }

  &::after {
    ${afterStyles};
    content: ' ';
    height: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    z-index: 10000;

    ${mediumQuery} {
      ${afterCollapsed};
    }
  }

  &.NavLink-active::after {
    border-right-color: ${({ theme: { isCollapsed, isHovered, hasSubNav } }) =>
      isHovered && hasSubNav && isCollapsed ? themeUtils.colors.dark : themeUtils.colors.white};
    ${mediumQuery} {
      ${({ theme: { isHovered, hasSubNav } }) =>
        isHovered && hasSubNav && { borderRightColor: themeUtils.colors.dark }};
    }
  }
`;

export const dashiconClass = css`
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  width: 36px;

  .NavLink-active & {
    color: ${themeUtils.colors.white};
  }
`;
