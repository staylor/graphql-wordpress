import { css } from 'emotion';
import styled from 'react-emotion';
import { NavLink as RRNavLink } from 'react-router-dom';
import theme from 'styles/theme';

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  min-height: calc(100vh - ${p => p.theme.padding * 2}px);
  padding: ${p => p.theme.padding}px;
`;

export const Header = styled.header`
  padding: ${p => p.theme.padding}px 0;
`;

export const Title = styled.h1`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;

  a {
    color: ${p => p.theme.colors.black};
    text-decoration: none;
  }
`;

export const Heading = styled.h2`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin: 0 0 ${p => p.theme.padding}px;
`;

export const NavLink = styled(RRNavLink)`
  color: ${p => p.theme.colors.dark};
  display: block;
  font-size: 14px;
  line-height: 18px;
  padding: 8px;
  position: relative;
  text-decoration: none;

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

export const Dashicon = styled.i`
  color: ${p => p.theme.colors.dark};
  display: block;
  float: left;
  height: 34px;
  text-align: center;
  width: 36px;

  .${activeClassName} & {
    color: ${p => p.theme.colors.white};
  }
`;

export const Flex = styled.section``;

export const Nav = styled.nav`
  background-color: ${p => p.theme.colors.background};
  bottom: -120px;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 160px;
`;

export const Content = styled.section`
  height: 100%;
  margin-left: 160px;
  padding-left: 20px;
`;

export const Button = styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  cursor: pointer;
  display: block;
  padding: 4px 10px;
  font-size: 18px;
`;

export const RowActions = styled.nav`
  color: ${p => p.theme.colors.subnav.details};
  font-size: 13px;

  a {
    text-decoration: none;
  }
`;

export const Filters = styled.section`
  overflow: hidden;
`;

export const Pagination = styled.nav`
  float: right;
  font-size: 13px;
  margin: 0 3px;

  strong {
    display: inline-block;
    font-weight: 400;
    margin: 0 3px;
    min-width: 65px;
    text-align: center;
  }

  span,
  a {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    height: 16px;
    line-height: 1;
    margin: 0 2px;
    min-width: 17px;
    padding: 3px 5px 7px;
    text-align: center;
  }

  span {
    border: 1px solid #ddd;
    background: #f7f7f7;
    color: #a0a5aa;
  }

  a {
    border: 1px solid #ccc;
    background: #e5e5e5;
    text-decoration: none;
  }
`;

export const SearchBox = styled.div`
  float: right;
`;
