import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  appLoading: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default function Loading() {
  return (
    <View style={styles.appLoading}>
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
}
