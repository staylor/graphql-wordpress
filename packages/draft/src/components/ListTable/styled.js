import styled from 'react-emotion';

export const RowActions = styled.nav`
  color: ${p => p.theme.colors.subnav.details};
  font-size: 13px;

  a {
    text-decoration: none;
  }
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

export const SearchBox = styled.div`
  float: right;
`;

export const Filters = styled.section`
  margin: 6px 0;
  overflow: hidden;
`;

export const Pagination = styled.nav`
  float: right;
  font-size: 13px;
  user-select: none;

  strong {
    display: inline-block;
    font-weight: 400;
    margin: 0 3px;
    min-width: 65px;
    text-align: center;
    user-select: none;
  }

  span,
  a {
    display: inline-block;
    font-size: 16px;
    font-weight: 400;
    height: 16px;
    line-height: 1;
    margin: 0 2px;
    min-width: 17px;
    padding: 3px 5px 7px;
    text-align: center;
    user-select: none;
  }

  span {
    border: 1px solid #ddd;
    background: #f7f7f7;
    color: #a0a5aa;
  }

  a {
    border: 1px solid #ccc;
    background: #e5e5e5;
    text-decoration: none;
  }
`;

export const Table = styled.table`
  border: 1px solid ${p => p.theme.colors.table.border};
  border-spacing: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  color: ${p => p.theme.colors.table.text};
  table-layout: fixed;
  width: 100%;
`;

export const Cell = styled.td`
  color: ${p => p.theme.colors.table.cell};
  font-size: 13px;
  line-height: 1.5;
  padding: 8px 10px;
  vertical-align: top;
  word-wrap: break-word;
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

export const StripedRow = styled.tr`
  &:nth-child(odd) {
    background: ${p => p.theme.colors.table.oddrow};
  }
`;
