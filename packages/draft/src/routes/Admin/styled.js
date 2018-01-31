import { css } from 'emotion';
import styled from 'react-emotion';
import themeUtils from 'styles/theme';
import { Link } from 'react-router-dom';

const mediumQuery = `@media screen and (max-width: ${themeUtils.breakpoint.medium}px)`;

export const atomicToolbarClass = css`
  position: absolute;
`;

export const wrapperClass = css`
  background: ${themeUtils.colors.white};
  margin: 0 auto;
  min-height: calc(100vh - ${themeUtils.padding * 2}px);
  padding: ${themeUtils.padding}px ${themeUtils.padding * 2}px;
`;

export const Header = styled.header`
  padding: ${themeUtils.padding}px 0;
`;

export const titleInputClass = css`
  font-size: 22px;
  line-height: 1;
  height: 38px;
  padding: 3px 8px;
`;

export const Heading = styled.h1`
  color: ${themeUtils.colors.dark};
  display: inline-block;
  font-family: ${themeUtils.fonts.futura};
  font-size: 23px;
  font-weight: normal;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin: 0 9px 0 0;
  padding: 9px 0 4px 0;
`;

export const HeaderAdd = styled(Link)`
  background: ${themeUtils.colors.detail};
  border: 1px solid ${themeUtils.colors.background};
  border-radius: 2px;
  color: ${themeUtils.colors.dark};
  cursor: pointer;
  font-size: 13px;
  font-weight: ${themeUtils.fonts.weight.bold};
  line-height: normal;
  outline: 0;
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  text-shadow: none;
  top: -3px;
  z-index: 1;
`;

export const Line = styled.br`
  display: block;
`;

export const Content = styled.section`
  height: 100%;
  margin-left: ${({ theme: { isCollapsed } }) =>
    isCollapsed ? themeUtils.menuWidth.collapsed : themeUtils.menuWidth.open}px;
  padding: 0 20px 65px;
  position: relative;
  z-index: 3;

  ${mediumQuery} {
    margin-left: ${themeUtils.menuWidth.collapsed}px;
  }
`;

export const FormWrap = styled.div`
  display: block;
  margin-right: 300px;

  &::after {
    clear: both;
    content: ' ';
    display: table;
  }

  ${mediumQuery} {
    margin-right: 0;
  }
`;
