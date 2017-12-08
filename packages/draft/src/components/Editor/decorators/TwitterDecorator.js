import React from 'react';
import theme from 'styles/theme';
import { findWithRegex } from '../utils';

/* eslint-disable react/prop-types */

const HANDLE_REGEX = /@[\w]+/g;
const HASHTAG_REGEX = /#[\w\u0590-\u05ff]+/g;

const HandleSpan = props => (
  <span style={{ color: theme.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);
const HashtagSpan = props => (
  <span style={{ color: theme.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);

function handleStrategy(contentBlock, callback) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

function hashtagStrategy(contentBlock, callback) {
  findWithRegex(HASHTAG_REGEX, contentBlock, callback);
}

export default [
  {
    strategy: handleStrategy,
    component: HandleSpan,
  },
  {
    strategy: hashtagStrategy,
    component: HashtagSpan,
  },
];
