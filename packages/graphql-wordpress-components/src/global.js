import { css, injectGlobal } from 'emotion';
import theme from './theme';

// eslint-disable-next-line
export const clear = css`
  &::after {
    clear: both;
    content: '.';
    display: block;
    height: 0;
    visibility: hidden;
  }
`;

// eslint-disable-next-line
injectGlobal`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.body};
    font-size: 13px;
    line-height: 18px;
    padding: 0 ${theme.padding}px;
    text-rendering: optimizeLegibility;
  }

  iframe {
    max-width: 100%;
  }

  a {
    color: ${theme.colors.pink};
  }

  blockquote {
    margin: 0 ${theme.padding}px;
  }

  em {
    text-decoration: underline;
  }

  strong {
    font-weight: ${theme.weightBold};
  }
`;
