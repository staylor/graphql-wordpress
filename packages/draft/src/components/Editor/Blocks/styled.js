import styled from 'react-emotion';
import { css } from 'emotion';

export const blockquoteClass = css`
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
`;

export const paragraphClass = css`
  margin: 0 0 24px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export const ImageWrap = styled.div`
  margin: 10px 0;
  pointer-events: all;
  position: relative;

  &.Image-MEDIUM,
  &.Image-SMALL {
    float: left;
    margin: 0 20px 10px 0;
  }
`;

export const Sizer = styled.div`
  display: block;
  position: absolute;
  z-index: 100001;
`;
