import styled from 'react-emotion';
import { withTheme } from 'theming';

export const SearchBox = styled.section`margin-bottom: 40px;`;

export const SearchInput = withTheme(styled.input`
  border: 1px solid ${p => p.theme.colors.detail};
  display: block;
  font-size: 16px;
  line-height: 20px;
  padding: 8px;
  width: 100%;
`);

export const A11Y = styled.label`display: none;`;
