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
`;

export const navFoldedClass = css`
  width: 36px;
`;

export const Separator = styled.i`
  display: block;
  height: 5px;
  margin: 0 0 6px 0;
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
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.black};
  }
`;

export const activeClassName = css`
  background-color: ${theme.colors.pink};
  color: ${theme.colors.white};

  &:hover {
    color: ${theme.colors.white};
  }

  &::after {
    border: solid 8px transparent;
    border-right-color: ${theme.colors.white};
    content: ' ';
    height: 0;
    margin-top: -8px;
    position: absolute;
    pointer-events: none;
    right: 0;
    top: 50%;
    width: 0;
  }
`;

export const foldedActiveClassName = css`
  &::after {
    border-width: 4px;
    margin-top: -4px;
  }
`;

export const Dashicon = styled.i`
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  width: 36px;

  .${activeClassName} & {
    color: ${p => p.theme.colors.white};
  }
`;

export const CollapseButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  display: block;
  font-size: 13px;
  height: 34px;
  line-height: 34px;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  transform: ${p => (p.folded ? 'rotate(180deg)' : 'none')};
  transition: color 0.1s ease-in-out;
  width: 100%;

  &:hover {
    color: ${p => p.theme.colors.black};
  }
`;

export const CollapseButtonIcon = styled.i`
  display: block;
  height: 34px;
  left: 0;
  line-height: 34px;
  position: absolute;
  top: 0;
  width: 36px;

  &::after {
    content: '\f148';
    display: block;
    font: normal 20px/1 dashicons !important;
    position: relative;
    speak: none;
    text-align: center;
    top: 7px;
    transition: all 0.1s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const CollapseButtonLabel = styled.i`
  display: block;
  left: 0;
  line-height: 34px;
  padding: 0 0 0 36px;
  position: absolute;
  top: 0;
  transition: all 0.1s ease-in-out;
`;
