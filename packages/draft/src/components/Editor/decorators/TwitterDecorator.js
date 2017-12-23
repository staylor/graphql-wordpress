import React from 'react';
import theme from 'styles/theme';
import { findWithRegex } from '../utils';

/* eslint-disable react/prop-types */

const HANDLE_REGEX = /@[\w]+/g;

const HandleSpan = props => (
  <span style={{ color: theme.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

export const TwitterRedraftDecorator = {
  strategy: handleStrategy,
  // eslint-disable-next-line
  component: ({ children, decoratedText }) => (
    <a
      key={decoratedText}
      target="_blank"
      href={`https://twitter.com/${decoratedText.substring(1)}`}
    >
      {children}
    </a>
  ),
};

export default [
  {
    strategy: handleStrategy,
    component: HandleSpan,
  },
];
