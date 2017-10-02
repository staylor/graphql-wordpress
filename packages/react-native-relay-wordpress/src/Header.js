import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import NavMenu from './NavMenu';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
});

export default ({ navMenu, settings: { title, description } }) =>
  <View style={styles.header}>
    <Link to="/" underlayColor="#fff">
      <Text style={styles.title}>
        {title}
      </Text>
    </Link>
    <Text style={styles.description}>
      {description}
    </Text>
    <NavMenu navMenu={navMenu} />
  </View>;
