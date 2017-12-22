import styled from 'react-emotion';
import { css } from 'emotion';

export const blockquoteClass = css`
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
`;

export const paragraphClass = css`
  margin: 0 0 15px;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  margin: 20px 0;
  max-width: 100%;
`;
