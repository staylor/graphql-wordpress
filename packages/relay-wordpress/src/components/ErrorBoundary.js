import React, { Component } from 'react';

/* eslint-disable react/prop-types */

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong.</p>;
    }
    return this.props.children;
  }
}
