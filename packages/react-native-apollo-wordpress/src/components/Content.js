import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Element from '@wonderboymusic/graphql-wordpress-native-components/lib/Element';
import Embed from '@wonderboymusic/graphql-wordpress-native-components/lib/Embed';

/* eslint-disable react/prop-types, react/forbid-prop-types */

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default class Content extends Component {
  parseNodes(nodes, parent = null) {
    let iterator = 0;
    return nodes.map(node => {
      iterator += 1;
      const key = `key-${iterator}`;
      if (node.__typename === 'Text') {
        return (
          <Text key={key} style={parent ? null : styles.text}>
            {node.text}
          </Text>
        );
      }
      if (node.__typename === 'Embed') {
        return <Embed key={key} node={node} />;
      }
      return this.parseElement(node, key, parent);
    });
  }

  parseElement(node, key, parent = null) {
    const props = { node, key, parent };
    props.children = null;
    if (node.children) {
      const children = this.parseNodes(node.children, node);
      if (node.tagName === 'script' || node.tagName === 'style') {
        return null;
      }
      props.children = children;
    }

    return <Element {...props} />;
  }

  render() {
    const {
      content,
      // only pass extra props
      ...rest
    } = this.props;

    return <View {...rest}>{this.parseNodes(content)}</View>;
  }
}
