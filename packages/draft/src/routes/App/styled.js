import styled from 'react-emotion';
import responsive from 'styles/responsive';

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  max-width: ${p => p.theme.contentWidth}px;
  padding: ${p => p.theme.padding}px;
`;

export const Header = styled.header`
  padding: 0 0 ${p => p.theme.padding}px;
`;

export const Title = styled.h1`
  display: block;
  margin: 0;

  a {
    color: ${p => p.theme.colors.black};
    text-decoration: none;
  }

  img {
    display: block;
    height: auto;
    width: 100%;

    ${responsive.desktop} {
      height: 54px;
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
    flex: 3;
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
  font-size: 14px;
  text-align: center;
`;
