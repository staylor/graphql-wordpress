import styled from 'react-emotion';
import { css } from 'emotion';

export const Toolbar = styled.div`
  background: ${p => p.theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
  position: absolute;
  visibility: hidden;
  z-index: 3;

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
`;

export const toolbarOpenClass = css`
  visibility: visible;
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
