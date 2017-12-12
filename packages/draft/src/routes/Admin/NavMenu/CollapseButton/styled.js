import styled from 'react-emotion';

export const CollapseButton = styled.button`
  background: none;
  border: none;
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  display: block;
  font-size: 13px;
  height: 34px;
  line-height: 34px;
  margin: 0;
  outline: 0;
  overflow: visible;
  padding: 0;
  position: relative;
  transition: color 0.1s ease-in-out;
  width: 100%;

  &:hover {
    color: ${p => p.theme.colors.black};
  }

  .NavMenu-collapsed & {
    transform: rotate(180deg);
  }
`;

export const CollapseButtonIcon = styled.i`
  display: block;
  height: 34px;
  left: 0;
  line-height: 34px;
  position: absolute;
  top: 0;
  width: 36px;

  &::after {
    content: '\f148';
    display: block;
    font: normal 20px/1 dashicons !important;
    position: relative;
    speak: none;
    text-align: center;
    top: 7px;
    transition: all 0.1s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const CollapseButtonLabel = styled.i`
  display: block;
  left: 0;
  line-height: 34px;
  padding: 0 0 0 36px;
  position: absolute;
  top: 0;
  transition: all 0.1s ease-in-out;
`;
