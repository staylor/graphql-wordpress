import styled from 'react-emotion';
import { css } from 'emotion';

export const Dropzone = styled.div`
  border: 2px dashed ${p => p.theme.colors.detail};
  border-radius: 3px;
  display: block;
  height: 300px;
  margin: 20px 0;
  width: 600px;

  &:hover {
    border-color: black;
  }
`;

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
