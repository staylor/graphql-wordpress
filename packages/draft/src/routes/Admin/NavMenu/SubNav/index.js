import React from 'react';
import { cx } from 'emotion';
import { withTheme } from 'emotion-theming';
import { NavLink } from 'react-router-dom';
import { subNavClass, subNavLinkClass } from './styled';

/* eslint-disable react/prop-types */

function SubNav({ theme: { isHovered, isCollapsed }, location, item }) {
  const active = location.pathname.indexOf(item.path) === 0;
  return (
    <nav
      className={cx(subNavClass, {
        'SubNav-active': active,
        'SubNav-collapsed': isCollapsed,
        'SubNav-hovered': isHovered,
        'SubNav-flyout': (isCollapsed || !active) && isHovered,
      })}
    >
      {item.routes.map(route => (
        <NavLink
          className={subNavLinkClass}
          key={route.path}
          to={route.path}
          exact
          activeClassName="SubNavLink-active"
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default withTheme(SubNav);
