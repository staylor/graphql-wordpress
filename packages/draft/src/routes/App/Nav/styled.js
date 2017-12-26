import styled from 'react-emotion';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 28px;
  margin: 15px 0;
`;

export const NavItem = styled(Link)`
  color: ${p => p.theme.colors.dark};
  display: inline-block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 24px;
  font-weight: bold;
  line-height: 28px;
  margin: 0 20px 0 0;
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: middle;
`;
