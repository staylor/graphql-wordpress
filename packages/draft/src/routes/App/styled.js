import styled from 'react-emotion';
import responsive from 'styles/responsive';

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: ${p => p.theme.padding}px;
`;

export const Header = styled.header`
  padding: ${p => p.theme.padding}px 0;
`;

export const Title = styled.h1`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 54px;
  font-weight: 700;
  letter-spacing: 0.3px;
  line-height: 54px;
  margin: 0;

  a {
    color: ${p => p.theme.colors.black};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  padding: ${p => p.theme.padding}px 0;
  ${responsive.desktop} {
    display: flex;
  }
`;

export const Primary = styled.section`
  ${responsive.desktop} {
    flex: 4;
    margin-right: ${p => p.theme.padding}px;
  }
`;

export const PrimaryWrapper = styled.section`
  max-width: 100%;
  width: 640px;
`;

export const Secondary = styled.section`
  display: block;
  min-height: 212px;
  min-width: 212px;
  ${responsive.desktop} {
    flex: 1;
  }
`;

export const Footer = styled.footer`
  text-align: center;
`;
