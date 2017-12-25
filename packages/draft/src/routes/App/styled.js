import styled from 'react-emotion';
import responsive from 'styles/responsive';

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: 20px;
`;

export const Header = styled.header`
  margin-bottom: ${p => p.theme.padding}px;
  position: relative;
`;

export const Title = styled.h1`
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

export const Content = styled.div`
  padding: ${p => p.theme.padding}px 0;
  ${responsive.desktop} {
    display: flex;
  }
`;

export const Primary = styled.section`
  margin-bottom: ${p => p.theme.padding}px;
  ${responsive.desktop} {
    flex: 4;
    margin-right: ${p => p.theme.padding}px;
  }
`;

export const PrimaryWrapper = styled.section`
  max-width: 100%;
`;

export const Secondary = styled.section`
  border-top: 1px solid ${p => p.theme.colors.detail};
  display: block;
  margin: ${p => p.theme.padding * 3}px auto 0;
  max-width: 100%;
  padding-top: ${p => p.theme.padding}px;
  width: 640px;
  ${responsive.desktop} {
    border: 0;
    margin: 0;
    padding: 0;
    width: 220px;
  }
`;

export const Footer = styled.footer`
  font-size: 14px;
  text-align: center;
`;

export const SocialLinks = styled.nav`
  margin: 20px 0 0;
  text-align: center;
  ${responsive.desktop} {
    margin: 0;
    position: absolute;
    right: 0;
    top: 13px;
  }
`;
export const SocialIcon = styled.a`
  color: ${p => p.theme.colors.dark};
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

  &.icons-facebook {
    width: 22px;
    ${responsive.desktop} {
      width: 30px;
    }
  }

  &:hover {
    color: ${p => p.theme.colors.black};
  }
`;

export const FooterLinks = styled.nav`
  margin: 10px 0;
  text-align: center;
`;
