import styled from 'react-emotion';
import responsive from 'styles/responsive';

export const ContentWrap = styled.div`
  &::after {
    clear: both;
    content: ' ';
    display: table;
  }

  ${responsive.tablet} {
    margin: 0 auto;
    width: 730px;
  }

  ${responsive.desktop} {
    margin: 0;
    width: auto;
  }
`;

export const LatestWrap = styled.div`
  ${responsive.tablet} {
    float: left;
    margin-right: ${p => p.theme.padding * 3}px;
    width: 200px;
  }
`;

export const VideosWrap = styled.div`
  border-top: 1px solid ${p => p.theme.colors.detail};
  margin: ${p => p.theme.padding * 3}px auto 0;
  padding-top: ${p => p.theme.padding}px;

  ${responsive.tablet} {
    border: 0 none;
    float: left;
    margin: 0;
    padding: 0;
    width: 480px;
  }
`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 ${p => p.theme.padding}px;

  & a {
    color: ${p => p.theme.colors.subhead};
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;
`;
