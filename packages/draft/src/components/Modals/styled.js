import styled from 'react-emotion';

export const Modal = styled.div`
  background: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.dark};
  bottom: 10%;
  left: 10%;
  padding: 30px;
  position: fixed;
  right: 10%;
  top: 10%;
  z-index: 100000;
`;

export const Frame = styled.div`
  bottom: 40px;
  left: 30px;
  overflow: scroll;
  position: absolute;
  right: 40px;
  top: 30px;

  &::after {
    clear: both;
    content: ' ';
    display: table;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  float: left;
  margin: 5px;
`;

export const LoadMore = styled.button`
  bottom: 10px;
  left: 30px;
  position: absolute;
`;

export const CloseButton = styled.i`
  color: ${p => p.theme.colors.dark};
  cursor: pointer;
  display: block;
  font-size: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
`;
