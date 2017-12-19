import styled from 'react-emotion';

export const Dropzone = styled.div`
  border: 4px dashed ${p => p.theme.colors.dark};
  color: ${p => p.theme.colors.dark};
  display: block;
  height: 200px;
  margin: 20px 0;
  width: 600px;
`;

export const DropzoneInfo = styled.p`
  font-size: 20px;
  margin: 70px auto 0;
  text-align: center;
`;

export const ProgressBar = styled.div`
  box-sizing: border-box;
  height: 30px;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
  padding: 4px;
  position: relative;
  width: 600px;
`;

export const ProgressText = styled.div`
  position: relative;
  z-index: 2;
`;

export const StatusBar = styled.div`
  background-color: ${p => p.theme.colors.pink};
  height: 30px;
  left: 0;
  position: absolute;
  top: 0;
  z-index: 1;
`;
