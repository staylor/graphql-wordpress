import React from 'react';
import styled from 'react-emotion';

export const Table = styled.table`
  border-collapse: collapse;
  margin: ${p => p.theme.padding}px 0;
`;
export const Rows = styled.tbody``;

// eslint-disable-next-line react/prop-types
export const Grid = ({ children, ...rest }) => (
  <Table {...rest}>
    <Rows>{children}</Rows>
  </Table>
);
export const Row = styled.tr``;
export const CellHeading = styled.th``;
export const Cell = styled.td`
  border: 1px solid ${p => p.theme.colors.detail};
  padding: 8px;
`;

// eslint-disable-next-line
export const LoadMore = styled.button`
  appearance: none;
  background: ${p => p.theme.colors.white};
  border: 1px solid ${p => p.theme.colors.detail};
  box-sizing: border-box;
  color: ${p => p.theme.colors.inactive};
  cursor: pointer;
  font-size: 16px;
  height: 32px;
  line-height: 16px;
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
