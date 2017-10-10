// @flow
import * as React from 'react';

export default class ErrorBoundary extends React.Component<*, *> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    this.setState({ hasError: true });
    // eslint-disable-next-line no-console
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}
