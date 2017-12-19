import React from 'react';
import cn from 'classnames';
import { NavLink as StyledNavLink, activeClass, Dashicon } from './styled';

/* eslint-disable react/prop-types */

export default function NavLink({ item, hovered, collapsed }) {
  return (
    <StyledNavLink
      to={item.path}
      exact={item.path === '/'}
      activeClassName={cn('NavLink-active', activeClass)}
      className={cn({
        'NavLink-collapsed': collapsed,
        'NavLink-hovered': hovered,
        'NavLink-hasSubNav': item.routes && item.routes.length > 0,
      })}
    >
      {item.dashicon && <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />}
      <span>{!collapsed && item.label}</span>
    </StyledNavLink>
  );
}
