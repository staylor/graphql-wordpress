import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { ThemeProvider, withTheme } from 'emotion-theming';
import NavLink from './NavLink';
import SubNav from './SubNav';
import CollapseButton from './CollapseButton';
import { Nav, navWrapClass, separatorClass } from './styled';

/* eslint-disable react/prop-types */

@withRouter
class NavMenu extends Component {
  state = {
    active: '',
  };

  onClick = e => {
    e.preventDefault();

    this.props.onCollapse(!this.props.theme.isCollapsed);
  };

  render() {
    const { location, routeConfig } = this.props;

    return (
      <Nav>
        {routeConfig.map((items, i) => (
          <Fragment key={i.toString(16)}>
            {i > 0 && <i className={separatorClass} />}
            {items.map((item, j) => {
              const key = `${i}-${j}`;
              const active = this.state.active === key;
              return (
                <div
                  key={key}
                  className={navWrapClass}
                  onMouseEnter={() => this.setState({ active: key })}
                  onMouseLeave={() => this.setState({ active: '' })}
                >
                  <ThemeProvider
                    theme={theme => ({
                      ...theme,
                      hovered: active ? 'hovered' : 'default',
                      isHovered: active,
                      hasSubNav: item.routes && item.routes.length > 0,
                    })}
                  >
                    <Fragment>
                      <NavLink item={item} />
                      {item.routes && <SubNav item={item} location={location} />}
                    </Fragment>
                  </ThemeProvider>
                </div>
              );
            })}
          </Fragment>
        ))}
        <i className={separatorClass} />
        <CollapseButton onClick={this.onClick} />
      </Nav>
    );
  }
}

export default withTheme(NavMenu);
