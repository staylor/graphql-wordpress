import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default function Error({ error, children = null }) {
  return (
    <View style={styles.container}>
      <Text>{error.message}</Text>
      {children}
    </View>
  );
}
