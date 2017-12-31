import { Component } from 'react';
import shallowEqual from 'shallowequal';
import handleStateChangeOnClient from './client';
import mapStateOnServer from './server';
import { reducePropsToState } from './utils';
import { providerShape } from './Provider';

const canUseDOM = typeof document !== 'undefined';

export default class InstanceStore extends Component {
  static contextTypes = providerShape;

  shouldComponentUpdate(nextProps) {
    return !shallowEqual(nextProps, this.props);
  }

  emitChange() {
    const { helmetInstances } = this.context;
    let state = reducePropsToState(helmetInstances.get().map(instance => instance.props));
    if (canUseDOM) {
      handleStateChangeOnClient(state);
    } else if (mapStateOnServer) {
      state = mapStateOnServer(state);
    }
    this.context.helmet(state);
  }

  componentWillMount() {
    const { helmetInstances } = this.context;
    helmetInstances.add(this);
    this.emitChange();
  }

  componentDidUpdate() {
    this.emitChange();
  }

  componentWillUnmount() {
    const { helmetInstances } = this.context;
    helmetInstances.remove(this);
    this.emitChange();
  }

  render() {
    return null;
  }
}
