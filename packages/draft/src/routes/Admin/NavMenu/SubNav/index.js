import React from 'react';
import { cx } from 'emotion';
import { withTheme } from 'emotion-theming';
import { SubNav as StyledSubNav, SubNavLink } from './styled';

/* eslint-disable react/prop-types */

function SubNav({ theme: { isHovered, isCollapsed }, location, item }) {
  const active = location.pathname.indexOf(item.path) === 0;
  return (
    <StyledSubNav
      className={cx({
        'SubNav-active': active,
        'SubNav-collapsed': isCollapsed,
        'SubNav-hovered': isHovered,
        'SubNav-flyout': (isCollapsed || !active) && isHovered,
      })}
    >
      {item.routes.map(route => (
        <SubNavLink key={route.path} to={route.path} exact activeClassName="SubNavLink-active">
          {route.label}
        </SubNavLink>
      ))}
    </StyledSubNav>
  );
}

export default withTheme(SubNav);
