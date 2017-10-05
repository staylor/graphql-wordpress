import { css } from 'emotion';
import styled from 'react-emotion';
import { Link } from 'found';
import responsive from '../responsive';

export const iframe = css`margin: 0 0 20px;`;

export const Title = styled.h1`
  font-family: ${p => p.theme.fonts.futura};
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
  margin: 0 0 ${p => p.theme.padding}px;

  ${responsive.tablet} {
    font-size: 36px;
    line-height: 42px;
  }
`;

export const Meta = styled.div`
  clear: both;
  color: ${p => p.theme.colors.meta};
  font-size: 12px;
  line-height: 18px;
  margin-bottom: ${p => p.theme.padding}px;
`;

export const Tag = styled(Link)`
  display: inline-block;
  margin: 0 0 0 ${p => p.theme.padding / 4}px;
`;
