import React from 'react';
import { InfoBox as StyledInfoBox, InfoBoxHeader, InfoBoxContent } from './styled';

/* eslint-disable react/prop-types */

export default function InfoBox({ label, children }) {
  return (
    <StyledInfoBox>
      <InfoBoxHeader>{label}</InfoBoxHeader>
      <InfoBoxContent>{children}</InfoBoxContent>
    </StyledInfoBox>
  );
}
