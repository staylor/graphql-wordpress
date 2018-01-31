import { css } from 'emotion';
import themeUtils from 'styles/theme';
import responsive from 'styles/responsive';

export const wrapperClass = css`
  background: ${themeUtils.colors.white};
  margin: 0 auto;
  max-width: ${themeUtils.contentWidth}px;
  padding: 20px;
`;

export const headerClass = css`
  margin-bottom: ${themeUtils.padding}px;
  position: relative;
`;

export const titleClass = css`
  display: block;
  margin: 0;

  a {
    text-decoration: none;
  }

  img {
    display: block;
    height: auto;
    margin: 0 auto;
    max-width: 615px;
    width: 100%;

    ${responsive.desktop} {
      height: 54px;
      margin: 0;
      width: auto;
    }
  }
`;

export const contentClass = css`
  padding: ${themeUtils.padding}px 0;
  ${responsive.desktop} {
    display: flex;
  }
`;

export const primaryClass = css`
  margin-bottom: ${themeUtils.padding}px;
  max-width: 100%;
  ${responsive.desktop} {
    flex: 4;
    margin-right: ${themeUtils.padding}px;
  }
`;

export const secondaryClass = css`
  border-top: 1px solid ${themeUtils.colors.detail};
  display: block;
  margin: ${themeUtils.padding * 3}px auto 0;
  max-width: 100%;
  padding-top: ${themeUtils.padding}px;
  width: 640px;
  ${responsive.desktop} {
    border: 0;
    margin: 0;
    padding: 0;
    width: 220px;
  }
`;

export const footerClass = css`
  font-size: 14px;
  text-align: center;
`;

export const socialNavClass = css`
  margin: 20px 0 0;
  text-align: center;
  ${responsive.desktop} {
    margin: 0;
    position: absolute;
    right: 0;
    top: 13px;
  }
`;

const socialIcon = css`
  color: ${themeUtils.colors.dark};
  display: inline-block;
  font-size: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  text-decoration: none;
  width: 35px;
  ${responsive.desktop} {
    font-size: 28px;
    height: 28px;
    line-height: 28px;
    width: 45px;
  }

  &:hover {
    color: ${themeUtils.colors.black};
  }

  span {
    display: none;
  }
`;

export const facebookIconClass = css`
  ${socialIcon};
  width: 22px;
  ${responsive.desktop} {
    width: 30px;
  }

  &::before {
    content: '\\e605';
  }
`;
export const twitterIconClass = css`
  ${socialIcon};

  &::before {
    content: '\\ea91';
  }
`;
export const instagramIconClass = css`
  ${socialIcon};

  &::before {
    content: '\\e603';
  }
`;

export const footerNavClass = css`
  margin: 10px 0;
  text-align: center;
`;
