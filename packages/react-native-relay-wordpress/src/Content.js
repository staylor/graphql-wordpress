import React, { Component } from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { StyleSheet, View, Text } from 'react-native';
import Element from './Element';
import Embed from './Embed';

/* eslint-disable react/prop-types, react/forbid-prop-types */

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export const dataFragment = graphql`
  fragment Content_content_data on ContentNode {
    __typename
    ... on Embed {
      ...Embed_node
    }
    ... on Text {
      text
    }
    ... on Element {
      ...Element_node
    }
  }
`;

class Content extends Component {
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

    return (
      <View {...rest}>
        {this.parseNodes(content)}
      </View>
    );
  }
}

export default createFragmentContainer(
  Content,
  graphql`
    fragment Content_content on ContentNode @relay(plural: true) {
      ...Content_content_data @inline
      ... on Element {
        children {
          ...Content_content_data @inline
          ... on Element {
            children {
              ...Content_content_data @inline
              ... on Element {
                children {
                  ...Content_content_data @inline
                  ... on Element {
                    children {
                      ...Content_content_data @inline
                      ... on Element {
                        children {
                          ...Content_content_data @inline
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
);
