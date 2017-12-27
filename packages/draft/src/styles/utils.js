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
