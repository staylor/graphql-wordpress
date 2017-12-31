import { Component } from 'react';
import PropTypes from 'prop-types';

export const providerShape = {
  helmet: PropTypes.func,
  helmetInstances: PropTypes.shape({
    get: PropTypes.func,
    add: PropTypes.func,
    remove: PropTypes.func,
  }),
};

export default class Provider extends Component {
  static propTypes = {
    context: PropTypes.shape({}),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    context: {},
  };

  static childContextTypes = providerShape;

  instances = [];

  getChildContext() {
    return {
      helmet: store => {
        // eslint-disable-next-line react/prop-types
        this.props.context.helmet = store;
      },
      helmetInstances: {
        get: () => this.instances,
        add: instance => {
          this.instances.push(instance);
        },
        remove: instance => {
          const index = this.instances.indexOf(instance);
          this.instances.splice(index, 1);
        },
      },
    };
  }

  render() {
    return this.props.children;
  }
}
