import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default class Error extends Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string,
    }).isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  };

  render() {
    const { error } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          {error.message}
        </Text>
        {this.props.children}
      </View>
    );
  }
}
