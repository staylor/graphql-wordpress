import { css } from 'emotion';
import themeUtils from 'styles/theme';

export const dropzoneClass = css`
  border: 4px dashed ${themeUtils.colors.dark};
  color: ${themeUtils.colors.text};
  display: block;
  height: 200px;
  margin: 20px 0;
  width: 600px;
`;

export const dropzoneInfoClass = css`
  font-size: 20px;
  margin: 70px auto 0;
  text-align: center;
`;

export const progressBarClass = css`
  box-sizing: border-box;
  height: 30px;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
  padding: 4px 20px;
  position: relative;
  width: 600px;
`;

export const progressTextClass = css`
  position: relative;
  z-index: 2;
`;

export const statusBarClass = css`
  background-color: ${themeUtils.colors.pink};
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 1;
`;
