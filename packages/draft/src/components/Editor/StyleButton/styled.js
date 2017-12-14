import styled from 'react-emotion';
import { css } from 'emotion';
import theme from 'styles/theme';

export const StyleButton = styled.span`
  cursor: pointer;
  display: inline-block;
  height: 100%;
  padding: 6px;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:hover {
    color: ${p => p.theme.colors.black};
  }
`;

export const activeButtonClass = css`
  color: ${theme.colors.pink};

  &:hover {
    color: ${theme.colors.pink};
  }
`;
