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
  display: block;
  font-size: 20px;
  line-height: 28px;
`;

export const activeClassName = css`
  color: ${theme.colors.black};
  text-decoration: none;
`;

export const Flex = styled.section`
  display: flex;
`;

export const Nav = styled.nav`
  flex: 1;
`;

export const Content = styled.section`
  flex: 4;
`;

export const Button = styled.button`
  background: ${p => p.theme.colors.white};
  cursor: pointer;
  display: block;
  padding: 4px 10px;
  font-size: 18px;
`;
