import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import Post from '../Post';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default createFragmentContainer(
  ({ viewer }) =>
    <View style={styles.container}>
      <SectionList
        keyExtractor={item => item.cursor}
        renderSectionHeader={({ section }) =>
          <Text style={styles.sectionHeader}>
            {section.title}
          </Text>}
        renderItem={({ item: { node } }) => <Post post={node} />}
        sections={[
          { data: viewer.stickies.edges, title: 'Latest' },
          {
            data: viewer.readThis.edges,
            title: 'Read This',
          },
          {
            data: viewer.watchThis.edges,
            title: 'Watch This',
          },
          {
            data: viewer.listenToThis.edges,
            title: 'Listen to This',
          },
        ]}
      />
    </View>,
  graphql`
    fragment Home_viewer on Viewer {
      stickies: posts(sticky: true, first: $stickiesTotal) {
        edges {
          node {
            id
            ...Post_post
          }
          cursor
        }
      }
      readThis: posts(category: "read-this", sticky: false, first: $readThisTotal) {
        edges {
          node {
            id
            ...Post_post
          }
          cursor
        }
      }
      watchThis: posts(category: "watch-this", first: $watchThisTotal) {
        edges {
          node {
            id
            ...Post_post
          }
          cursor
        }
      }
      listenToThis: posts(category: "listen-to-this", first: $listenToThisTotal) {
        edges {
          node {
            id
            ...Post_post
          }
          cursor
        }
      }
    }
  `
);
