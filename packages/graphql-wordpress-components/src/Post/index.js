import styled from 'react-emotion';

export const Article = styled.article`margin: 0 0 ${p => p.theme.padding}px;`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 18px;
  line-height: 24px;
  margin: 0 0 ${p => p.theme.padding}px;

  & a {
    color: ${p => p.theme.colors.subhead};
    text-decoration: none;
  }
`;

export const Content = styled.section`
  & p {
    margin: 0 0 ${p => p.theme.padding}px;
  }
`;
