import styled from 'react-emotion';
import { css } from 'emotion';
import theme from 'styles/theme';

export const headingStyles = css`
  display: block;
  font-family: ${theme.fonts.futura};
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin: 0 0 ${theme.padding}px;
`;

export const Heading = styled.h2`
  ${headingStyles};
`;

export const Table = styled.table`
  border: 1px solid ${p => p.theme.colors.table.border};
  border-spacing: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  color: ${p => p.theme.colors.table.text};
  table-layout: fixed;
  width: 100%;
`;

export const StripedRow = styled.tr`
  &:nth-child(odd) {
    background: ${p => p.theme.colors.table.oddrow};
  }
`;
export const CellHeading = styled.th`
  font-size: 14px;
  line-height: 1.4;
  padding: 8px 10px;
  text-align: left;

  thead & {
    border-bottom: 1px solid ${p => p.theme.colors.table.metaborder};
  }

  tfoot & {
    border-top: 1px solid ${p => p.theme.colors.table.metaborder};
  }
`;
export const CheckboxCell = styled.th`
  width: 2.2em;

  tbody & {
    padding: 6px 0 0;
    vertical-align: top;

    input {
      vertical-align: text-top;
    }
  }

  thead & {
    border-bottom: 1px solid ${p => p.theme.colors.table.metaborder};
  }

  tfoot & {
    border-top: 1px solid ${p => p.theme.colors.table.metaborder};
  }
`;
export const Cell = styled.td`
  color: ${p => p.theme.colors.table.cell};
  font-size: 13px;
  line-height: 1.5;
  padding: 8px 10px;
  vertical-align: top;
  word-wrap: break-word;
`;
export const RowTitle = styled.strong`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0.2em;
  word-wrap: break-word;

  & a {
    text-decoration: none;
  }
`;

export const LoadMore = styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.detail};
  box-sizing: border-box;
  color: ${p => p.theme.colors.inactive};
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
  transition: 400ms;
  width: 80px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.black};
    outline: 0 none;
  }
`;
