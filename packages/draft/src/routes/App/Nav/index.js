import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Select from 'components/Form/Select';
import { Nav, NavItem } from './styled';

/* eslint-disable react/prop-types */

const yearChoices = (start, end) => [...Array(end - start).keys()].map(i => start + i);

@withRouter
export default class Navigation extends Component {
  onChange = value => {
    this.props.history.push({
      pathname: `/videos/${value}`,
    });
  };

  render() {
    return (
      <Nav>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/videos">Videos</NavItem>
        <Select
          placeholder="-- BY YEAR --"
          choices={yearChoices(2001, 2018).reverse()}
          onChange={this.onChange}
        />
      </Nav>
    );
  }
}
