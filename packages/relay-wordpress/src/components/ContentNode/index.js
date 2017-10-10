import * as React from 'react';
import { graphql } from 'react-relay';
import FragmentContainer from 'decorators/FragmentContainer';
import type { ContentNodeProps } from 'relay-wordpress';
import Element from './Element';
import Embed from './Embed';

/* eslint-disable react/prop-types, react/forbid-prop-types */

export const dataFragment = graphql`
  fragment ContentNode_content_data on ContentNode {
    __typename
    ... on Embed {
      ...Embed_node
    }
    ... on Text {
      text
    }
    ... on Element {
      tagName
      ...Element_node
    }
  }
`;

@FragmentContainer(graphql`
  fragment ContentNode_content on ContentNode @relay(plural: true) {
    ...ContentNode_content_data @relay(mask: false)
    ... on Element {
      children {
        ...ContentNode_content_data @relay(mask: false)
        ... on Element {
          children {
            ...ContentNode_content_data @relay(mask: false)
            ... on Element {
              children {
                ...ContentNode_content_data @relay(mask: false)
                ... on Element {
                  children {
                    ...ContentNode_content_data @relay(mask: false)
                    ... on Element {
                      children {
                        ...ContentNode_content_data @relay(mask: false)
                        ... on Element {
                          children {
                            ...ContentNode_content_data @relay(mask: false)
                            ... on Element {
                              children {
                                ...ContentNode_content_data @relay(mask: false)
                                ... on Element {
                                  children {
                                    ...ContentNode_content_data @relay(mask: false)
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
            }
          }
        }
      }
    }
  }
`)
export default class ContentNode extends React.Component<ContentNodeProps> {
  static defaultProps = {
    onEmbedClick: null,
  };

  parseNodes(nodes) {
    let iterator = 0;
    return nodes.map(node => {
      iterator += 1;
      const key = `key-${iterator}`;
      if (node.__typename === 'Text') {
        return node.text;
      }
      if (node.__typename === 'Embed') {
        return <Embed key={key} node={node} onEmbedClick={this.props.onEmbedClick} />;
      }
      return this.parseElement(node, key);
    });
  }

  parseElement(node, key) {
    const props = { node, key };
    props.children = null;
    if (node.children) {
      const children = this.parseNodes(node.children);
      if (node.tagName === 'script' || node.tagName === 'style') {
        props.dangerouslySetInnerHTML = { __html: children.join('') };
      } else {
        props.children = children;
      }
    }

    return <Element {...props} />;
  }

  render() {
    const {
      component: ContentComponent,
      content,
      onEmbedClick,
      relay,
      // only pass extra props
      ...rest
    } = this.props;

    return <ContentComponent {...rest}>{this.parseNodes(content)}</ContentComponent>;
  }
}
