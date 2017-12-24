import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { cx } from 'emotion';
import NavLink from './NavLink';
import SubNav from './SubNav';
import CollapseButton from './CollapseButton';
import { Nav, navCollapsedClass, NavWrap, Separator } from './styled';

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
        className={cx({
          'NavMenu-collapsed': collapsed,
          [navCollapsedClass]: collapsed,
        })}
      >
        {routeConfig.map((items, i) => (
          <Fragment key={i.toString(16)}>
            {i > 0 && <Separator />}
            {items.map((item, j) => {
              const key = `${i}-${j}`;
              const active = this.state.active === key;
              return (
                <NavWrap
                  key={key}
                  onMouseEnter={() => this.setState({ active: key })}
                  onMouseLeave={() => this.setState({ active: '' })}
                >
                  <NavLink {...{ item, collapsed, hovered: active }} />
                  {item.routes && <SubNav {...{ item, location, collapsed, hovered: active }} />}
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
