import { injectGlobal } from 'emotion';
import theme from 'styles/theme';

// eslint-disable-next-line
injectGlobal`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.body};
    font-size: 13px;
    line-height: 18px;
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
