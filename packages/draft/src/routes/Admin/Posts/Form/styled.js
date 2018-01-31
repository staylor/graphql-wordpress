import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';
import { h1styles, buttonStyles, buttonColors } from 'styles/utils';

export const postTitleClass = css`
  ${h1styles};
  border: 0 none;
  box-shadow: none;
  height: 47px;
  margin: 0;
  padding: 0;
`;

export const FeaturedImage = styled.img`
  display: block;
  height: auto;
  margin: 0 10px 10px 0;
  max-width: 100%;
`;

export const ViewPost = styled.a`
  ${buttonStyles};
  ${buttonColors};
`;

export const TagWrap = styled.div`
  font-size: 12px;
  margin: 6px 0;
  overflow: auto;
`;

export const Tag = styled.div`
  cursor: default;
  float: left;
  font-size: 13px;
  line-height: 20px;
  margin-right: 6px;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteTag = styled.a`
  cursor: pointer;
  float: left;
  height: 20px;
  width: 24px;

  &::before {
    border-radius: 50%;
    color: ${themeUtils.colors.dark};
    content: '\\f153';
    display: block;
    font: 400 16px/20px dashicons;
    height: 20px;
    line-height: 1.28;
    margin-left: 2px;
    speak: none;
    text-align: center;
    width: 20px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
