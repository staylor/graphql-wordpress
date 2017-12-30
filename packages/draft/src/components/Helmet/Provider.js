import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Provider extends Component {
  static propTypes = {
    context: PropTypes.shape({}),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    context: {},
  };

  static childContextTypes = {
    helmet: PropTypes.func,
  };

  getChildContext() {
    return {
      helmet: store => {
        Object.keys(store).forEach(key => {
          this.props.context[key] = store[key];
        });
      },
    };
  }

  render() {
    return this.props.children;
  }
}
