import styled from 'react-emotion';

export const Field = styled.p`
  display: block;
  margin: 0 0 ${p => p.theme.padding}px;
`;

export const FieldName = styled.strong`
  display: block;
  font-family: ${p => p.theme.fonts.futura};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.3px;
  line-height: 20px;
`;

export const FieldInput = styled.input`
  border: 1px solid ${p => p.theme.colors.detail};
  display: block;
  font-size: 16px;
  line-height: 20px;
  margin: 5px 0;
  padding: 8px;
`;

export const FieldValue = styled.span`
  display: block;
  font-size: 16px;
  line-height: 20px;
`;
