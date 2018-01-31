import styled from 'react-emotion';
import themeUtils from 'styles/theme';

export const Modal = styled.div`
  background: ${themeUtils.colors.white};
  border: 2px solid ${themeUtils.colors.dark};
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
  overflow: auto;
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
  overflow: hidden;
  width: 120px;
`;

export const VideoItem = styled.div`
  cursor: pointer;
  float: left;
  height: 110px;
  margin: 5px;
  overflow: hidden;
  width: 120px;
`;

export const ItemTitle = styled.span`
  display: block;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ItemImage = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
`;

export const CloseButton = styled.i`
  color: ${themeUtils.colors.dark};
  cursor: pointer;
  display: block;
  font-size: 20px;
  height: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
`;
