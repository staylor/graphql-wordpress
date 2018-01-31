import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';

export const Controls = styled.div`
  display: block;
  font-size: 14px;
  height: ${themeUtils.editor.buttons.height}px;
  position: relative;
  user-select: none;
`;

export const LinkInput = styled.input`
  background: transparent;
  border: 0 none;
  display: block;
  font-size: 15px;
  height: 20px;
  line-height: 20px;
  padding: 6px;
  width: 200px;

  &:focus {
    outline: none;
  }
`;

export const LinkAction = styled.span`
  cursor: pointer;
  display: block;
  height: 32px;
  line-height: 32px;
  position: absolute;
  right: 0;
  top: 0;
  width: 32px;
`;

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
    color: ${themeUtils.colors.dark};
  }
`;

export const activeButtonClass = css`
  color: ${themeUtils.colors.dark};

  &:hover {
    color: ${themeUtils.colors.pink};
  }
`;
