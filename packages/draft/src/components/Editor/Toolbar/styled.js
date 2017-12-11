import styled from 'react-emotion';
import { css } from 'emotion';

export const Toolbar = styled.div`
  background: ${p => p.theme.colors.black};
  border-radius: 4px;
  color: ${p => p.theme.colors.white};
  position: absolute;
  visibility: hidden;
  z-index: 3;

  &::after {
    border: 6px solid transparent;
    border-top-color: ${p => p.theme.colors.black};
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
