import React from 'react';
import { withTheme } from 'emotion-theming';
import { CollapseButton as StyledButton, buttonIconClass, buttonLabelClass } from './styled';

/* eslint-disable react/prop-types */

function CollapseButton({ theme: { isCollapsed }, ...rest }) {
  return (
    <StyledButton
      {...rest}
      aria-expanded={!isCollapsed}
      aria-label={isCollapsed ? 'Expand menu' : 'Collapse menu'}
    >
      <i className={buttonIconClass} />
      {!isCollapsed && <i className={buttonLabelClass}>Collapse menu</i>}
    </StyledButton>
  );
}

export default withTheme(CollapseButton);
