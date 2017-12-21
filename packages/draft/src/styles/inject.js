import { injectGlobal } from 'emotion';
import theme from 'styles/theme';

export default function inject() {
  return injectGlobal`
    body {
      background: ${theme.colors.background};
      color: ${theme.colors.dark};
      font-family: ${theme.fonts.body};
      font-size: 1em;
      line-height: 1.5;
      text-rendering: optimizeLegibility;
    }

    iframe {
      max-width: 100%;
    }

    a {
      color: ${theme.colors.pink};

      &:hover, &:active {
        color: deeppink;
      }
    }

    blockquote {
      margin: 0 ${theme.padding}px;
    }

    em {
      font-style: italic;
    }

    strong {
      font-weight: ${theme.weightBold};
    }

    sup {
      font-size: 10px;
      vertical-align: super;
    }

    sub {
      font-size: 10px;
      vertical-align: sub;
    }
  `;
}
