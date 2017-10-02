import url from 'url';
import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import { sortOrderedHierarchy } from './utils/walker';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  link: {
    color: '#e50082',
    fontSize: 18,
  },
});

class NavMenu extends Component {
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
              path = urlObj.path;
            } else {
              path = urlObj.path.replace(/\/$/, '');
            }
          }

          return (
            <Link key={id} to={path} underlayColor="#eee">
              <Text style={styles.link}>
                {title}
              </Text>
            </Link>
          );
        })}
      </View>
    );
  }
}

export default createFragmentContainer(
  NavMenu,
  graphql`
    fragment NavMenu_navMenu on NavMenu {
      id
      name
      items {
        id
        title
        url
        parent
        order
        type
        typeName
        typeSlug
        dataSlug
        dataID
      }
    }
  `
);
