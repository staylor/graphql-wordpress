import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';

export const StyleButton = styled.span`
  cursor: pointer;
  display: inline-block;
  height: ${themeUtils.editor.buttons.height}px;
  line-height: ${themeUtils.editor.buttons.height}px;
  overflow: hidden;
  padding: 0 6px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    color: ${themeUtils.colors.black};
  }
`;

export const activeButtonClass = css`
  color: ${themeUtils.colors.dark};

  &:hover {
    color: ${themeUtils.colors.pink};
  }
`;
