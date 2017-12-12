import React from 'react';
import cn from 'classnames';
import { SubNav as StyledSubNav, SubNavLink, subNavActiveClass } from './styled';

/* eslint-disable react/prop-types */

export default function SubNav({ location, item, active }) {
  return (
    <StyledSubNav
      className={cn({
        'SubNav-flyout': active,
        'SubNav-active': location.pathname.indexOf(item.path) === 0,
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
