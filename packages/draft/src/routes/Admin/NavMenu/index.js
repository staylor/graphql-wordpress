import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import {
  Nav,
  navFoldedClass,
  NavLink,
  activeClass,
  foldedActiveClass,
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

    this.props.onFolded(!this.props.folded);
  };

  render() {
    const { location, routeConfig, folded } = this.props;

    return (
      <Nav className={folded && navFoldedClass}>
        {routeConfig.map((items, i) => (
          <Fragment key={i.toString(16)}>
            {i > 0 && <Separator />}
            {items.map((item, j) => (
              <Fragment key={j.toString(16)}>
                <NavLink
                  to={item.path}
                  exact={item.path === '/'}
                  activeClassName={`${activeClass}${this.props.folded
                    ? ` ${foldedActiveClass}`
                    : ''}`}
                >
                  {item.dashicon && (
                    <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />
                  )}
                  {!this.props.folded && item.label}
                </NavLink>
                {!folded &&
                  location.pathname.indexOf(item.path) === 0 &&
                  item.routes && (
                    <SubNav key="subnav">
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
        <CollapseButton folded={this.props.folded} onClick={this.onClick}>
          <CollapseButtonIcon />
          {!this.props.folded && <CollapseButtonLabel>Collapse menu</CollapseButtonLabel>}
        </CollapseButton>
      </Nav>
    );
  }
}
