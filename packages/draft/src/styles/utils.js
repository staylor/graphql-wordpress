import styled from 'react-emotion';

export const Heading = styled.h2`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin: 0 0 ${p => p.theme.padding}px;
`;

export const Table = styled.table`
  border: 1px solid ${p => p.theme.colors.table.border};
  border-spacing: 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  color: ${p => p.theme.colors.table.text};
  margin: ${p => p.theme.padding}px 0;
  table-layout: fixed;
`;

export const Row = styled.tr``;
export const CellHeading = styled.th`
  border-bottom: 1px solid ${p => p.theme.colors.table.metaborder};
  font-size: 14px;
  line-height: 1.4;
  padding: 8px 10px;
  text-align: left;
`;
export const Cell = styled.td`
  color: ${p => p.theme.colors.table.cell};
  font-size: 13px;
  line-height: 1.5;
  padding: 8px 10px;
  vertical-align: top;
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
