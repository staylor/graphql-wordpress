import styled from 'react-emotion';
import { css } from 'emotion';

export const Nav = styled.nav`
  background-color: ${p => p.theme.colors.background};
  bottom: -120px;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 160px;
  z-index: 4;

  @media screen and (max-width: 782px) {
    width: 36px;
  }
`;

export const navCollapsedClass = css`
  width: 36px;
`;

export const Separator = styled.i`
  display: block;
  height: 5px;
  margin: 0 0 6px 0;
`;

export const NavWrap = styled.div`
  position: relative;
`;
