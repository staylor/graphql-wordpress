import { css } from 'emotion';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';

export const AtomicToolbar = styled.div`
  position: absolute;
`;

export const PageWrapper = styled.div`
  background: ${p => p.theme.colors.white};
  margin: 0 auto;
  min-height: calc(100vh - ${p => p.theme.padding * 2}px);
  padding: ${p => p.theme.padding}px ${p => p.theme.padding * 2}px;
`;

export const Header = styled.header`
  padding: ${p => p.theme.padding}px 0;
`;

export const titleInputClass = css`
  font-size: 22px;
  line-height: 1;
  height: 38px;
  padding: 3px 8px;
`;

export const Heading = styled.h1`
  display: inline-block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.3px;
  line-height: 1.3;
  margin: 0 9px 0 0;
  padding: 9px 0 4px 0;
`;

export const HeaderAdd = styled(Link)`
  background: ${p => p.theme.colors.detail};
  border: 1px solid ${p => p.theme.colors.background};
  border-radius: 2px;
  color: ${p => p.theme.colors.pink};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  line-height: normal;
  outline: 0;
  padding: 4px 8px;
  position: relative;
  text-decoration: none;
  text-shadow: none;
  top: -3px;
  z-index: 1;
`;

export const Flex = styled.section``;

export const Content = styled.section`
  height: 100%;
  margin-left: 160px;
  padding: 0 20px 65px;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 782px) {
    margin-left: 36px;
  }
`;

export const collapsedNavClass = css`
  margin-left: 36px;
`;

const buttonStyles = css`
  appearance: none;
  background: ${theme.colors.detail};
  border-radius: 3px;
  box-sizing: border-box;
  color: ${theme.colors.dark};
  cursor: pointer;
  font-size: 13px;
  vertical-align: baseline;

  &:hover {
    color: ${theme.colors.black};
  }
`;

export const Button = styled.button`
  ${buttonStyles};
  height: 30px;
  line-height: 28px;
  padding: 0 12px 2px;
`;

export const SecondaryButton = styled.button`
  ${buttonStyles};
  height: 24px;
  line-height: 22px;
  padding: 0 6px 2px;
`;

export const RowActions = styled.nav`
  color: ${p => p.theme.colors.subnav.details};
  font-size: 13px;

  a {
    text-decoration: none;
  }
`;

export const SearchBox = styled.div`
  float: right;
`;

export const FormWrap = styled.div`
  display: block;
  margin-right: 300px;

  &::after {
    clear: both;
    content: ' ';
    display: table;
  }

  @media screen and (max-width: 782px) {
    margin-right: 0;
  }
`;
