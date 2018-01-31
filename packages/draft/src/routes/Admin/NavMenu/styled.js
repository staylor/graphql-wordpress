import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';

export const Nav = styled.nav`
  background-color: ${themeUtils.colors.background};
  bottom: -120px;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: ${({ theme: { isCollapsed } }) =>
    isCollapsed ? themeUtils.menuWidth.collapsed : themeUtils.menuWidth.open}px;
  z-index: 4;

  @media screen and (max-width: ${themeUtils.breakpoint.medium}px) {
    width: ${themeUtils.menuWidth.collapsed}px;
  }
`;

export const separatorClass = css`
  display: block;
  height: 5px;
  margin: 0 0 6px 0;
`;

export const navWrapClass = css`
  position: relative;
`;
