import { css } from 'emotion';
import styled from 'react-emotion';
import theme from 'styles/theme';

export const Wrapper = styled.section`
  max-width: 100%;
  width: 640px;
`;

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

export const Embed = styled.figure`
  cursor: pointer;
  display: inline-block;
  height: auto !important;
  margin: 0 0 20px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  width: ${p => p.width}px;

  & figcaption {
    display: none;
  }

  & img {
    height: auto;
    max-width: 100%;
    position: relative;
    z-index: 1;
  }

  &::before {
    background: ${theme.colors.pink};
    border-radius: 10px;
    content: ' ';
    height: 52px;
    left: 50%;
    margin: -21px 0 0 -48px;
    opacity: 0.8;
    position: absolute;
    top: 50%;
    width: 76px;
    z-index: 2;
  }

  &::after {
    border-bottom: 10px solid transparent;
    border-left: 20px solid ${theme.colors.white};
    border-top: 10px solid transparent;
    content: ' ';
    height: 0;
    left: calc(50% + 31px);
    margin: -21px 0 0 -48px;
    position: absolute;
    top: calc(50% + 16px);
    width: 0;
    z-index: 3;
  }

  &:hover {
    &::before {
      background: ${theme.colors.black};
    }
  }
`;

export const iframeClass = css`
  margin: 0 0 20px;
`;

// adjust aspect ratio from 4:3 to 16:9
export const thumb640Class = css`
  margin: -60px 0;
`;

export const thumb480Class = css`
  margin: -35px 0;
`;

export const LoadMore = styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.detail};
  box-sizing: border-box;
  color: ${p => p.theme.colors.inactive};
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  transition: 400ms;
  width: 80px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    outline: 0 none;
  }
`;
