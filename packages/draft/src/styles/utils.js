import styled from 'react-emotion';
import { css } from 'emotion';
import theme from 'styles/theme';
import responsive from 'styles/responsive';

export const headingStyles = css`
  display: block;
  font-weight: ${theme.fonts.weight.bold};
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
  border-radius: 3px;
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  height: 28px;
  line-height: 26px;
  margin: 0;
  outline: 0;
  padding: 0 10px 1px;
  text-decoration: none;
  transition-duration: 0.05s;
  transition-property: border, background, color;
  transition-timing-function: ease-in-out;
  vertical-align: top;
  white-space: nowrap;

  &:active {
    transform: translateY(1px);
  }
`;

const buttonColors = css`
  background: ${theme.buttons.base.background};
  border-color: ${theme.buttons.base.border};
  box-shadow: ${theme.buttons.base.boxShadow};
  color: ${theme.buttons.base.color};

  &:active {
    background: ${theme.buttons.base.active.background};
    border-color: ${theme.buttons.base.active.border};
    box-shadow: ${theme.buttons.base.active.boxShadow};
  }

  &:focus {
    background: ${theme.buttons.base.focus.background};
    border-color: ${theme.buttons.base.focus.border};
    box-shadow: ${theme.buttons.base.focus.boxShadow};
    color: ${theme.buttons.base.focus.color};
  }

  &:hover {
    background: ${theme.buttons.base.hover.background};
    border-color: ${theme.buttons.base.hover.border};
    color: ${theme.buttons.base.hover.color};
  }
`;

export const Button = styled.button`
  ${buttonStyles};
  ${buttonColors};
`;

const largeButtonStyles = css`
  ${buttonStyles};
  height: 30px;
  line-height: 28px;
  padding: 0 12px 2px;
`;

export const PrimaryButton = styled.button`
  ${largeButtonStyles};
  background: ${theme.buttons.primary.background};
  border-color: ${theme.buttons.primary.border};
  box-shadow: ${theme.buttons.primary.boxShadow};
  color: ${theme.buttons.primary.color};
  text-shadow: ${theme.buttons.primary.textShadow};

  &:active {
    background: ${theme.buttons.primary.active.background};
    border-color: ${theme.buttons.primary.active.border};
    box-shadow: ${theme.buttons.primary.active.boxShadow};
  }

  &:focus {
    background: ${theme.buttons.primary.focus.background};
    border-color: ${theme.buttons.primary.focus.border};
    box-shadow: ${theme.buttons.primary.focus.boxShadow};
    color: ${theme.buttons.primary.focus.color};
  }

  &:hover {
    background: ${theme.buttons.primary.hover.background};
    border-color: ${theme.buttons.primary.hover.border};
    color: ${theme.buttons.primary.hover.color};
  }
`;

const smallButtonStyles = css`
  ${buttonStyles};
  font-size: 11px;
  height: 24px;
  line-height: 22px;
  padding: 0 8px 1px;
`;

export const SecondaryButton = styled.button`
  ${smallButtonStyles};
  ${buttonColors};
`;
