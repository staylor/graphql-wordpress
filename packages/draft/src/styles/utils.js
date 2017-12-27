import styled from 'react-emotion';
import { css } from 'emotion';
import theme from 'styles/theme';
import responsive from 'styles/responsive';

export const headingStyles = css`
  display: block;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin-bottom: 10px;

  ${responsive.desktop} {
    margin-bottom: ${theme.padding}px;
  }
`;

export const h1styles = css`
  ${headingStyles};
  font-size: 30px;

  ${responsive.desktop} {
    font-size: 36px;
  }
`;

export const h2Styles = css`
  ${headingStyles};
  font-family: ${theme.fonts.futura};
  font-size: 24px;
`;

export const h3Styles = css`
  ${headingStyles};
  font-family: ${theme.fonts.futura};
  font-size: 20px;
`;

export const h4Styles = css`
  ${headingStyles};
  font-family: ${theme.fonts.futura};
  font-size: 18px;
`;

export const Heading = styled.h2`
  ${headingStyles};
  font-family: ${theme.fonts.futura};
  font-size: 25px;
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

const buttonStyles = css`
  appearance: none;
  background: ${theme.colors.detail};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${theme.colors.dark};
  cursor: pointer;
  font-size: 13px;
  vertical-align: baseline;

  &:hover {
    color: ${theme.colors.black};
  }
`;

export const Button = styled.button`
  ${buttonStyles};
  height: 30px;
  line-height: 28px;
  padding: 0 12px 2px;
`;

export const SecondaryButton = styled.button`
  ${buttonStyles};
  height: 24px;
  line-height: 22px;
  padding: 0 6px 2px;
`;
