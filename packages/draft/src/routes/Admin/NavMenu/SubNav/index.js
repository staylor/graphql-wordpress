import React from 'react';
import { cx } from 'emotion';
import { SubNav as StyledSubNav, SubNavLink, subNavActiveClass } from './styled';

/* eslint-disable react/prop-types */

export default function SubNav({ location, item, collapsed, hovered }) {
  const active = location.pathname.indexOf(item.path) === 0;
  return (
    <StyledSubNav
      className={cx({
        'SubNav-active': active,
        'SubNav-collapsed': collapsed,
        'SubNav-hovered': hovered,
        'SubNav-flyout': (collapsed || !active) && hovered,
      })}
    >
      {item.routes.map(route => (
        <SubNavLink key={route.path} to={route.path} exact activeClassName={subNavActiveClass}>
          {route.label}
        </SubNavLink>
      ))}
    </StyledSubNav>
  );
}
