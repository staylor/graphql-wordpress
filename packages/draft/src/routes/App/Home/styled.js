import styled from 'react-emotion';
import themeUtils from 'styles/theme';
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
    margin-right: 20px;
    width: 230px;
  }

  @media only screen and (min-width: 1050px) {
    width: 274px;
  }

  @media only screen and (min-width: 1090px) {
    margin-right: ${themeUtils.padding * 2}px;
    width: 300px;
  }
`;

export const VideosWrap = styled.div`
  border-top: 1px solid ${themeUtils.colors.detail};
  margin: ${themeUtils.padding * 2}px auto 0;
  padding-top: ${themeUtils.padding}px;

  ${responsive.tablet} {
    border: 0 none;
    float: left;
    margin: 0;
    padding: 0;
    width: 480px;
  }
`;

export const LatestItem = styled.article`
  margin: 0 0 ${themeUtils.padding}px;
  &::after {
    clear: both;
    content: ' ';
    display: table;
  }
`;

export const Title = styled.h1`
  font-family: ${themeUtils.fonts.futura};
  font-size: 20px;
  line-height: 1.4;
  margin: 0 0 ${themeUtils.padding}px;

  & a {
    color: ${themeUtils.colors.dark};
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 24px;
`;

export const FeaturedImage = styled.img`
  display: block;
  height: auto;
  margin: 0 0 15px;
  max-width: 100%;
  width: 280px;

  @media only screen and (min-width: 480px) {
    float: left;
    margin: 0 20px 10px 0;
    width: 150px;
  }

  @media only screen and (min-width: 630px) {
    width: 250px;
  }

  @media only screen and (min-width: 720px) {
    width: 300px;
  }

  ${responsive.tablet} {
    float: none;
    margin: 10px 0;
  }
`;
