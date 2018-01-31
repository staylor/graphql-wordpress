import colors from './colors';
import buttons from './buttons';

export default {
  fonts: {
    body:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    futura: "'futura-pt', 'Helvetica Neue', sans-serif",
    dashicons: 'dashicons',
    weight: {
      bold: 700,
    },
  },
  colors,
  buttons,
  editor: {
    buttons: {
      height: 32,
    },
  },

  contentWidth: 1080,
  padding: 15,

  breakpoint: {
    medium: 782,
  },

  menuWidth: {
    open: 160,
    collapsed: 36,
  },
};
