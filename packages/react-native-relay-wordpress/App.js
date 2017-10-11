import React from 'react';
import { NativeRouter } from 'react-router-native';
import Wrapper from './src/Wrapper';

export default function App() {
  return (
    <NativeRouter>
      <Wrapper />
    </NativeRouter>
  );
}
