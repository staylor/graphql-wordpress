import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { StyleSheet, Text, View, SectionList } from 'react-native';
import HomeQuery from 'graphql/Home_Query.graphql';
import Post from 'components/Post';
import Error from 'components/Error';
import Loading from 'components/Loading';

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

@graphql(HomeQuery, {
  options: {
    variables: {
      stickiesTotal: 2,
      watchThisTotal: 5,
      readThisTotal: 5,
      listenToThisTotal: 5,
    },
  },
})
export default class Home extends Component {
  render() {
    const { data: { loading, error } } = this.props;
    if (error) {
      return <Error />;
    } else if (loading) {
      return <Loading />;
    }

    const { viewer } = this.props.data;

    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor={item => item.cursor}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
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
      </View>
    );
  }
}
