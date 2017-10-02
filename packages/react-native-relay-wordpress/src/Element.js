import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { Text, Image, WebView, Dimensions, Linking } from 'react-native';

export default createFragmentContainer(
  ({ node, children, parent = null }) => {
    const props = { style: {} };
    const attrs = (node.attributes || []).reduce((memo, { name, value }) => {
      memo[name] = value;
      return memo;
    }, {});

    const elementChildren = children;
    let responsiveWidth = null;
    let responsiveHeight = null;
    let elementWidth = null;
    let elementHeight = null;

    let tag = Text;
    switch (node.tagName) {
      case 'iframe':
        tag = WebView;

        responsiveWidth = Dimensions.get('window').width;
        responsiveHeight = parseInt(attrs.height || 80, 10);
        props.style = {
          flex: -1,
          width: responsiveWidth,
          height: responsiveHeight,
          marginBottom: 20,
        };
        props.source = { uri: attrs.src };
        break;

      case 'img':
        tag = Image;

        responsiveWidth = Dimensions.get('window').width;
        elementWidth = attrs.width || responsiveWidth;
        elementHeight = attrs.height || responsiveWidth * 0.75;
        responsiveHeight = responsiveWidth * elementHeight / elementWidth;

        props.style = {
          flex: -1,
          width: responsiveWidth,
          height: responsiveHeight,
        };
        props.source = { uri: attrs.src };
        break;

      case 'blockquote':
        props.style = {
          paddingLeft: 20,
          paddingRight: 40,
          paddingBottom: 20,
          fontSize: 14,
        };
        break;

      case 'em':
        props.style = {
          textDecorationLine: 'underline',
        };
        break;

      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        props.style.paddingLeft = 10;
        props.style.paddingRight = 10;
      // eslint-disable-next-line
      case 'strong':
        props.style.fontWeight = 'bold';
        break;

      case 'a':
        props.style = { color: '#e50082' };
        props.onPress = () => Linking.openURL(attrs.href);
        break;

      case 'p':
        if (parent && parent.tagName === 'blockquote') {
          return elementChildren;
        }
        props.style = {
          marginBottom: 20,
          paddingLeft: 10,
          paddingRight: 10,
        };
        break;
      default:
        break;
    }

    return React.createElement(tag, props, elementChildren);
  },
  graphql`
    fragment Element_node on Element {
      tagName
      attributes {
        name
        value
      }
    }
  `
);
