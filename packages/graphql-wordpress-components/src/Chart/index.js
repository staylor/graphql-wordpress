import styled from 'react-emotion';
import { withTheme } from 'theming';
import { clear } from '../global';

export const Title = withTheme(styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 36px;
  font-weight: bold;
  line-height: 42px;
  margin: 0 0 10px;

  & a {
    color: ${p => p.theme.colors.dark};
    text-decoration: none;
  }
`);

export const List = styled.ol`list-style: decimal;`;

export const Item = styled.li`
  composes: ${clear};
  display: list-item;
  margin: 10px 0 10px 20px;
  padding: 0 0 0 7px;
`;

export const Image = styled.img`
  display: block;
  float: left;
  margin: 0 10px 0 0;
`;
