import React, { Component } from 'react';
import { NativeRouter } from 'react-router-native';
import Wrapper from './src/Wrapper';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Wrapper />
      </NativeRouter>
    );
  }
}
