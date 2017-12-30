import { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import handleStateChangeOnClient from './client';
import mapStateOnServer from './server';
import { reducePropsToState } from './utils';

const canUseDOM = typeof document !== 'undefined';
const mountedInstances = [];

export default class InstanceStore extends Component {
  static contextTypes = {
    helmet: PropTypes.func,
  };

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }

  emitChange() {
    let state = reducePropsToState(mountedInstances.map(instance => instance.props));
    if (canUseDOM) {
      handleStateChangeOnClient(state);
    } else if (mapStateOnServer) {
      state = mapStateOnServer(state);
    }
    this.context.helmet(state);
  }

  componentWillMount() {
    mountedInstances.push(this);
    this.emitChange();
  }

  componentDidUpdate() {
    this.emitChange();
  }

  componentWillUnmount() {
    const index = mountedInstances.indexOf(this);
    mountedInstances.splice(index, 1);
    this.emitChange();
  }

  render() {
    return null;
  }
}
