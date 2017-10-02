import styled from 'react-emotion';
import { withTheme } from 'theming';

export const Article = withTheme(styled.article`margin: 0 0 ${p => p.theme.padding}px;`);

export const Title = withTheme(styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 ${p => p.theme.padding}px;

  & a {
    color: ${p => p.theme.colors.subhead};
    text-decoration: none;
  }
`);

export const Content = withTheme(styled.section`
  & p {
    margin: 0 0 ${p => p.theme.padding}px;
  }
`);
