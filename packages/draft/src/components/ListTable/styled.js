import styled from 'react-emotion';
import themeUtils from 'styles/theme';

export const RowActions = styled.nav`
  font-size: 13px;

  a {
    color: ${themeUtils.colors.text};
    text-decoration: none;

    &.delete {
      color: ${themeUtils.colors.pink};
    }
  }
`;

export const RowTitle = styled.strong`
  display: block;
  font-size: 14px;
  font-weight: ${themeUtils.fonts.weight.bold};
  margin-bottom: 0.2em;
  word-wrap: break-word;

  & a {
    text-decoration: none;
  }

  & span {
    font-size: 13px;
    font-weight: normal;
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
    font-weight: normal;
    margin: 0 3px;
    min-width: 65px;
    text-align: center;
    user-select: none;
  }

  span,
  a {
    display: inline-block;
    font-size: 16px;
    font-weight: normal;
    height: 16px;
    line-height: 1;
    margin: 0 2px;
    min-width: 17px;
    padding: 3px 5px 7px;
    text-align: center;
    user-select: none;
  }

  span {
    border: 1px solid ${themeUtils.colors.detail};
    background: ${themeUtils.colors.background};
  }

  a {
    border: 1px solid ${themeUtils.colors.detail};
    background: ${themeUtils.colors.white};
    color: ${themeUtils.colors.dark};
    text-decoration: none;

    &:hover {
      color: ${themeUtils.colors.black};
    }
  }
`;

export const Table = styled.table`
  border: 1px solid ${themeUtils.colors.detail};
  border-spacing: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  table-layout: fixed;
  width: 100%;
`;

export const Cell = styled.td`
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
    border-bottom: 1px solid ${themeUtils.colors.detail};
  }

  tfoot & {
    border-top: 1px solid ${themeUtils.colors.detail};
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
    border-bottom: 1px solid ${themeUtils.colors.detail};
  }

  tfoot & {
    border-top: 1px solid ${themeUtils.colors.detail};
  }
`;

export const StripedRow = styled.tr`
  tbody &:nth-of-type(odd) {
    background: ${themeUtils.colors.background};
  }
`;
