import { injectGlobal } from 'emotion';
import theme from 'styles/theme';
import iconsWoff from 'public/fonts/icons/icons.woff';
import iconsWoff2 from 'public/fonts/icons/icons.woff2';
import iconsTtf from 'public/fonts/icons/icons.ttf';
import iconsSvg from 'public/fonts/icons/icons.svg';

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

    @font-face {
      font-family: 'icons';
      src: url('${iconsWoff2}?hjlue1') format('woff2'),
        url('${iconsTtf}?hjlue1') format('truetype'),
        url('${iconsWoff}?hjlue1') format('woff'),
        url('${iconsSvg}?hjlue1#icons') format('svg');
      font-weight: normal;
      font-style: normal;
    }
    [class^='icons-'],
    [class*=' icons-'] {
      font-family: 'icons';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .icons-envelope::before {
      content: '\\e903';
    }
    .icons-share::before {
      content: '\\e905';
    }
    .icons-spotify::before {
      content: '\\e900';
    }
    .icons-snapchat::before {
      content: '\\e901';
    }
    .icons-shazam::before {
      content: '\\e902';
    }
    .icons-twitter::before {
      content: '\\ea91';
    }
    .icons-vimeo::before {
      content: '\\ea9c';
    }
    .icons-tumblr::before {
      content: '\\eabb';
    }
    .icons-apple::before {
      content: '\\eabf';
    }
    .icons-soundcloud::before {
      content: '\\eac4';
    }
    .icons-linkedin2::before {
      content: '\\eac9';
    }
    .icons-pinterest::before {
      content: '\\ead0';
    }
    .icons-pinterest-p::before {
      content: '\\e904';
    }
    .icons-arrow-down::before {
      content: '\\e609';
    }
    .icons-arrow-left::before {
      content: '\\e607';
    }
    .icons-arrow-right::before {
      content: '\\e608';
    }
    .icons-facebook::before {
      content: '\\e605';
    }
    .icons-scs::before {
      content: '\\e600';
    }
    .icons-cross::before {
      content: '\\e601';
    }
    .icons-plus::before {
      content: '\\e602';
    }
    .icons-book::before {
      content: '\\e606';
    }
    .icons-link::before {
      content: '\\e60f';
    }
    .icons-reply::before {
      content: '\\e60a';
    }
    .icons-retweet::before {
      content: '\\e60b';
    }
    .icons-star-outlined::before {
      content: '\\e60c';
    }
    .icons-google::before {
      content: '\\e60d';
    }
    .icons-instagram::before {
      content: '\\e603';
    }
    .icons-youtube::before {
      content: '\\e604';
    }
  `;
}
