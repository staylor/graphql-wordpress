import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import cn from 'classnames';
import {
  Nav,
  navCollapsedClass,
  NavLink,
  activeClass,
  collapsedActiveClass,
  SubNav,
  SubNavLink,
  subNavActiveClass,
  Separator,
  Dashicon,
  CollapseButton,
  CollapseButtonIcon,
  CollapseButtonLabel,
} from './styled';

/* eslint-disable react/prop-types */

@withRouter
export default class NavMenu extends Component {
  onClick = e => {
    e.preventDefault();

    this.props.onCollapse(!this.props.collapsed);
  };

  render() {
    const { location, routeConfig, collapsed } = this.props;

    return (
      <Nav className={cn({ [navCollapsedClass]: collapsed })}>
        {routeConfig.map((items, i) => (
          <Fragment key={i.toString(16)}>
            {i > 0 && <Separator />}
            {items.map((item, j) => (
              <Fragment key={j.toString(16)}>
                <NavLink
                  to={item.path}
                  exact={item.path === '/'}
                  activeClassName={cn(activeClass, {
                    [collapsedActiveClass]: collapsed,
                  })}
                >
                  {item.dashicon && (
                    <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />
                  )}
                  {!collapsed && item.label}
                </NavLink>
                {!collapsed &&
                  location.pathname.indexOf(item.path) === 0 &&
                  item.routes && (
                    <SubNav>
                      {item.routes.map(route => (
                        <SubNavLink
                          key={route.path}
                          to={route.path}
                          exact
                          activeClassName={subNavActiveClass}
                        >
                          {route.label}
                        </SubNavLink>
                      ))}
                    </SubNav>
                  )}
              </Fragment>
            ))}
          </Fragment>
        ))}
        <Separator />
        <CollapseButton collapsed={collapsed} onClick={this.onClick}>
          <CollapseButtonIcon />
          {!collapsed && <CollapseButtonLabel>Collapse menu</CollapseButtonLabel>}
        </CollapseButton>
      </Nav>
    );
  }
}
