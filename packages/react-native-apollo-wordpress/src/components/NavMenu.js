import url from 'url';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { sortOrderedHierarchy } from '@wonderboymusic/graphql-wordpress-native-components/lib/utils/walker';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  link: {
    color: '#e50082',
    fontSize: 18,
  },
});

export default class NavMenu extends Component {
  sorted = null;

  render() {
    const { navMenu } = this.props;

    if (!navMenu) {
      return null;
    }

    this.sorted = sortOrderedHierarchy(navMenu.items);

    return (
      <View>
        {this.sorted.top.map(item => {
          const { id, title, url: itemUrl, typeSlug, dataSlug } = item;
          let path;
          if (typeSlug && dataSlug) {
            path = `/${typeSlug}/${dataSlug}`;
          } else {
            const urlObj = url.parse(itemUrl);
            if (urlObj.path === '/') {
              path = '/';
            } else {
              path = urlObj.path.replace(/\/$/, '');
            }
          }

          return (
            <Link key={id} to={path} underlayColor="#eee">
              <Text style={styles.link}>{title}</Text>
            </Link>
          );
        })}
      </View>
    );
  }
}
