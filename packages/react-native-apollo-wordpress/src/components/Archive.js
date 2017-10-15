import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Post from './Post';

/* eslint-disable react/prop-types */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  list: {
    flex: 1,
  },

  itemLink: {
    flex: 1,
  },

  item: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },

  activity: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8e8e8e',
  },
});

export default class Archive extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showLoader: false,
    };
  }

  render() {
    const { variables, loading, fetchMore = null, posts: { pageInfo, edges } } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={edges}
          keyExtractor={({ node }) => node.id}
          renderItem={({ item: { node } }) => <Post post={node} />}
          onEndReached={() => {
            if (!fetchMore || !pageInfo.hasNextPage) {
              return;
            }

            if (loading) {
              this.setState({ showLoader: true });
              return;
            }

            fetchMore({
              variables: {
                ...variables,
                cursor: pageInfo.endCursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                const { edges: previousEdges } = previousResult.viewer.posts;
                const { edges: newEdges } = fetchMoreResult.viewer.posts;
                const newViewer = {
                  viewer: {
                    ...fetchMoreResult.viewer,
                    posts: {
                      ...fetchMoreResult.viewer.posts,
                      edges: [...previousEdges, ...newEdges],
                    },
                  },
                };
                return newViewer;
              },
            })
              .then(() => {
                this.setState({ showLoader: false });
              })
              .catch(e => {
                if (e) {
                  // eslint-disable-next-line no-console
                  console.log(e);
                }
              });
          }}
        />
        {this.state.showLoader && <ActivityIndicator color="#000" style={styles.activity} />}
      </View>
    );
  }
}
