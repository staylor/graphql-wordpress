import React from 'react';
import { cx } from 'emotion';
import { NavLink as StyledNavLink, dashiconClass } from './styled';

/* eslint-disable react/prop-types */

export default function NavLink({ item }) {
  return (
    <StyledNavLink to={item.path} exact={item.path === '/'} activeClassName="NavLink-active">
      {item.dashicon && (
        <i className={cx(dashiconClass, 'dashicons-before', `dashicons-${item.dashicon}`)} />
      )}
      <span>{item.label}</span>
    </StyledNavLink>
  );
}
