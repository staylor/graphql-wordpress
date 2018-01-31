import styled from 'react-emotion';
import { css } from 'emotion';
import themeUtils from 'styles/theme';
import responsive from 'styles/responsive';

export const headingStyles = css`
  display: block;
  font-weight: ${themeUtils.fonts.weight.bold};
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin-bottom: 10px;

  ${responsive.desktop} {
    margin-bottom: ${themeUtils.padding}px;
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
  font-family: ${themeUtils.fonts.futura};
  font-size: 24px;
`;

export const h3Styles = css`
  ${headingStyles};
  font-family: ${themeUtils.fonts.futura};
  font-size: 20px;
`;

export const h4Styles = css`
  ${headingStyles};
  font-family: ${themeUtils.fonts.futura};
  font-size: 18px;
`;

export const Heading = styled.h2`
  ${headingStyles};
  font-family: ${themeUtils.fonts.futura};
  font-size: 25px;
`;

export const LoadMore = styled.button`
  appearance: none;
  background: ${themeUtils.colors.white};
  border: 1px solid ${themeUtils.colors.detail};
  box-sizing: border-box;
  color: ${themeUtils.colors.inactive};
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
    border: 1px solid ${themeUtils.colors.black};
    color: ${themeUtils.colors.black};
    outline: 0 none;
  }
`;

export const buttonStyles = css`
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

export const buttonColors = css`
  background: ${themeUtils.buttons.base.background};
  border-color: ${themeUtils.buttons.base.border};
  box-shadow: ${themeUtils.buttons.base.boxShadow};
  color: ${themeUtils.buttons.base.color};

  &:active {
    background: ${themeUtils.buttons.base.active.background};
    border-color: ${themeUtils.buttons.base.active.border};
    box-shadow: ${themeUtils.buttons.base.active.boxShadow};
  }

  &:focus {
    background: ${themeUtils.buttons.base.focus.background};
    border-color: ${themeUtils.buttons.base.focus.border};
    box-shadow: ${themeUtils.buttons.base.focus.boxShadow};
    color: ${themeUtils.buttons.base.focus.color};
  }

  &:hover {
    background: ${themeUtils.buttons.base.hover.background};
    border-color: ${themeUtils.buttons.base.hover.border};
    color: ${themeUtils.buttons.base.hover.color};
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
  background: ${themeUtils.buttons.primary.background};
  border-color: ${themeUtils.buttons.primary.border};
  box-shadow: ${themeUtils.buttons.primary.boxShadow};
  color: ${themeUtils.buttons.primary.color};
  text-shadow: ${themeUtils.buttons.primary.textShadow};

  &:active {
    background: ${themeUtils.buttons.primary.active.background};
    border-color: ${themeUtils.buttons.primary.active.border};
    box-shadow: ${themeUtils.buttons.primary.active.boxShadow};
  }

  &:focus {
    background: ${themeUtils.buttons.primary.focus.background};
    border-color: ${themeUtils.buttons.primary.focus.border};
    box-shadow: ${themeUtils.buttons.primary.focus.boxShadow};
    color: ${themeUtils.buttons.primary.focus.color};
  }

  &:hover {
    background: ${themeUtils.buttons.primary.hover.background};
    border-color: ${themeUtils.buttons.primary.hover.border};
    color: ${themeUtils.buttons.primary.hover.color};
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
