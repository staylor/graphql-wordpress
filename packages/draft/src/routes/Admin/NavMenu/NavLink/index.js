import React from 'react';
import { cx } from 'emotion';
import { NavLink as StyledNavLink, activeClass, Dashicon } from './styled';

/* eslint-disable react/prop-types */

export default function NavLink({ item, hovered, collapsed }) {
  return (
    <StyledNavLink
      to={item.path}
      exact={item.path === '/'}
      activeClassName={cx('NavLink-active', activeClass)}
      className={cx({
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
