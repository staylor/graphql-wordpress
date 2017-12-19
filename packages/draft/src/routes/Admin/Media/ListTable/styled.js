import styled from 'react-emotion';
import { css } from 'emotion';

export const thumbnailColumnClass = css`
  width: 62px;
`;

export const titleColumnClass = css`
  width: 60%;
`;

export const Thumbnail = styled.img`
  display: block;
  height: auto;
  ${thumbnailColumnClass};
`;
