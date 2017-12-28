import { lighten, darken } from 'polished';
import colors from './colors';

const baseBackground = '#f7f7f7';
const baseDarker = '#eee';
const baseShadowActive = 'rgba(0, 0, 0, .5)';
const baseShadowFocus = 'rgba(0, 0, 0, .8)';

const base = {
  background: baseBackground,
  border: colors.detail,
  boxShadow: `0 1px 0 ${colors.detail}`,
  color: colors.dark,
  active: {
    background: baseDarker,
    border: colors.text,
    boxShadow: `inset 0 2px 5px -3px ${baseShadowActive}`,
  },
  hover: {
    background: colors.background,
    border: colors.text,
    color: colors.black,
  },
  focus: {
    background: colors.background,
    border: colors.dark,
    boxShadow: `0 0 3px ${baseShadowFocus}`,
    color: colors.black,
  },
};

const primaryBackground = colors.dark;
const primaryLighter = lighten(0.02, primaryBackground); // 2% lighter
const primaryDarker = darken(0.05, primaryBackground); // 5% darker
const primaryBorder = darken(0.09, primaryBackground); // 9% darker
const primaryText = '#fff';
const primaryFocusShadow = lighten(0.17, primaryBackground); // 17% lighter

const primary = {
  background: primaryBackground,
  border: `${primaryDarker} ${primaryBorder} ${primaryBorder}`,
  boxShadow: `0 1px 0 ${primaryBorder}`,
  color: primaryText,
  textShadow: `0 -1px 1px ${primaryBorder}, 1px 0 1px ${primaryBorder}, 0 1px 1px ${primaryBorder}, -1px 0 1px ${primaryBorder}`,
  active: {
    background: primaryDarker,
    border: primaryBorder,
    boxShadow: `inset 0 2px 0 ${primaryBorder}`,
  },
  focus: {
    background: primaryLighter,
    border: primaryBorder,
    boxShadow: `0 1px 0 ${primaryDarker}, 0 0 2px 1px ${primaryFocusShadow}`,
    color: primaryText,
  },
  hover: {
    background: primaryLighter,
    border: primaryBorder,
    color: primaryText,
  },
};

export default {
  inactive: '#767676',
  base,
  primary,
};
