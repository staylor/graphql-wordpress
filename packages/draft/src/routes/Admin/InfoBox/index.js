import React, { Component } from 'react';
import { InfoBox as StyledInfoBox, InfoBoxHeader, InfoBoxContent } from './styled';

/* eslint-disable react/prop-types */

export default class InfoBox extends Component {
  state = {};

  render() {
    return (
      <StyledInfoBox>
        <InfoBoxHeader>{this.props.label}</InfoBoxHeader>
        <InfoBoxContent>{this.props.children}</InfoBoxContent>
      </StyledInfoBox>
    );
  }
}
