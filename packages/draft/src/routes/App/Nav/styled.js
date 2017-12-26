import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import responsive from 'styles/responsive';

export const Nav = styled.nav`
  height: 28px;
  margin: ${p => p.theme.padding}px 0;
  ${responsive.tablet} {
    margin: ${p => p.theme.padding}px auto;
    text-align: center;
    width: 640px;
  }
  ${responsive.desktop} {
    margin: ${p => p.theme.padding}px 0;
    text-align: left;
    width: auto;
  }
`;

export const NavItem = styled(Link)`
  color: ${p => p.theme.colors.dark};
  display: inline-block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 20px;
  font-weight: bold;
  line-height: 28px;
  margin: 0 10px 0 0;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;

  ${responsive.tablet} {
    font-size: 24px;
    margin: 0 20px 0 0;
  }
`;
