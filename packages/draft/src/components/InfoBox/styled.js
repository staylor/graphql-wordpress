import styled from 'react-emotion';

export const InfoBox = styled.aside`
  border: 1px solid ${p => p.theme.colors.detail};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  display: block;
  float: right;
  line-height: 1.4;
  margin: 10px -300px 0 0;
  width: 280px;

  @media screen and (max-width: 782px) {
    float: none;
    margin-right: 0;
    width: 100%;
  }
`;

export const InfoBoxHeader = styled.h3`
  border-bottom: 1px solid ${p => p.theme.colors.detail};
  font-size: 14px;
  font-weight: 600;
  padding: 8px 12px;
  user-select: none;
`;

export const InfoBoxContent = styled.div`
  font-size: 13px;
  padding: 6px 10px 20px;
`;
