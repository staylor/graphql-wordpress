import styled from 'react-emotion';
import { css } from 'emotion';
import { headingStyles } from 'styles/utils';
import theme from 'styles/theme';

export const hidePlaceholderClass = css`
  .public-DraftEditorPlaceholder-root {
    display: none;
  }
`;

export const BlockButton = styled.div`
  color: ${p => p.theme.colors.detail};
  cursor: pointer;
  display: block;
  font-size: 24px;
  left: -30px;
  position: absolute;
  transform: scale(0);
  transition: transform 0.2s cubic-bezier(0.3, 1.2, 0.2, 1);
  transition-delay: 0.5s;

  &:hover {
    color: ${p => p.theme.colors.dark};
  }
`;

export const EditorWrap = styled.div`
  background: #fff;
  font-size: 14px;
  padding: 15px 0;
  position: relative;
`;

export const linkClass = css`
  color: ${theme.colors.pink};
  text-decoration: underline;
`;

export const blockquoteClass = css`
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
`;

export const RichEditor = styled.div`
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;
  position: relative;
  z-index: 1;

  h1 {
    ${headingStyles};
  }

  h2 {
    ${headingStyles};
    font-size: 24px;
  }

  h3 {
    ${headingStyles};
    font-size: 20px;
  }

  h4 {
    ${headingStyles};
    font-size: 18px;
  }

  .public-DraftEditorPlaceholder-root,
  .public-DraftEditor-content {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  .public-DraftEditor-content {
    min-height: 100px;
  }

  .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
    font-size: 16px;
    padding: 20px;
  }
`;

export const Toolbar = styled.div`
  background: ${p => p.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  transform: scale(0);
  transition: transform 0.15s cubic-bezier(0.3, 1.2, 0.2, 1);
  z-index: 10;

  &::after {
    border: 6px solid transparent;
    border-top-color: ${p => p.theme.colors.white};
    content: ' ';
    height: 0;
    position: absolute;
    pointer-events: none;
    right: 50%;
    bottom: -12px;
    width: 0;
  }

  &.Toolbar-sidebar {
    left: -28px;

    &::after {
      left: 4px;
      right: auto;
    }
  }

  &.Toolbar-flush {
    &::after {
      border-top-color: transparent;
    }
  }
`;
