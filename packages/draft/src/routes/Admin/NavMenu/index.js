import React, { Component, Fragment } from 'react';
import {
  Nav,
  navFoldedClass,
  NavLink,
  activeClassName,
  foldedActiveClassName,
  Separator,
  Dashicon,
  CollapseButton,
  CollapseButtonIcon,
  CollapseButtonLabel,
} from './styled';

/* eslint-disable react/prop-types */

export default class NavMenu extends Component {
  onClick = e => {
    e.preventDefault();

    this.props.onFolded(!this.props.folded);
  };

  render() {
    return (
      <Nav className={this.props.folded && navFoldedClass}>
        {this.props.routeConfig.map((items, i) => (
          <Fragment key={i.toString(16)}>
            {i > 0 && <Separator />}
            {items.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                exact={item.path === '/'}
                activeClassName={`${activeClassName} ${this.props.folded && foldedActiveClassName}`}
              >
                {item.dashicon && (
                  <Dashicon className={`dashicons-before dashicons-${item.dashicon}`} />
                )}
                {!this.props.folded && item.label}
              </NavLink>
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
