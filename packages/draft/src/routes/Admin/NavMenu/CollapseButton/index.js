import React from 'react';
import { CollapseButton as StyledButton, CollapseButtonIcon, CollapseButtonLabel } from './styled';

/* eslint-disable react/prop-types */

export default function CollapseButton({ collapsed, ...rest }) {
  return (
    <StyledButton
      {...rest}
      aria-expanded={!collapsed}
      aria-label={collapsed ? 'Expand menu' : 'Collapse menu'}
    >
      <CollapseButtonIcon />
      {!collapsed && <CollapseButtonLabel>Collapse menu</CollapseButtonLabel>}
    </StyledButton>
  );
}
