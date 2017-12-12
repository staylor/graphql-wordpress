import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import cn from 'classnames';
import SubNav from './SubNav';
import CollapseButton from './CollapseButton';
import {
  Nav,
  navCollapsedClass,
  NavWrap,
  NavLink,
  activeClass,
  Separator,
  Dashicon,
} from './styled';

/* eslint-disable react/prop-types */

@withRouter
export default class NavMenu extends Component {
  state = {
    active: '',
  };

  onClick = e => {
    e.preventDefault();

    this.props.onCollapse(!this.props.collapsed);
  };

  render() {
    const { location, routeConfig, collapsed } = this.props;

    return (
      <Nav
        className={cn({
          'NavMenu-collapsed': collapsed,
          [navCollapsedClass]: collapsed,
        })}
      >
        {routeConfig.map((items, i) => (
          <Fragment key={`route-${i.toString(16)}`}>
            {i > 0 && <Separator />}
            {items.map((item, j) => {
              const key = `${i}-${j}`;
              const enter = e => {
                if (e.target.classList.contains(activeClass)) {
                  return;
                }
                this.setState({ active: key });
              };
              return (
                <NavWrap key={key}>
                  <NavLink
                    to={item.path}
                    exact={item.path === '/'}
                    activeClassName={activeClass}
                    className={cn({
                      'NavLink-hasSubNav': item.routes && item.routes.length > 0,
                    })}
                    onMouseEnter={enter}
                    onMouseLeave={() => this.setState({ active: '' })}
                  >
                    {item.dashicon && (
                      <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />
                    )}
                    {!collapsed && item.label}
                  </NavLink>
                  {item.routes && (
                    <SubNav {...{ item, location }} active={this.state.active === key} />
                  )}
                </NavWrap>
              );
            })}
          </Fragment>
        ))}
        <Separator />
        <CollapseButton onClick={this.onClick} />
      </Nav>
    );
  }
}
