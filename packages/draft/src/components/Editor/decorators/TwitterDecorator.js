// @flow
import React from 'react';
import type { ContentBlock } from 'draft-js';
import themeUtils from 'styles/theme';
import { findWithRegex } from '../utils';

const HANDLE_REGEX = /@[\w]+/g;

function handleStrategy(contentBlock: ContentBlock, callback: () => void) {
  findWithRegex(HANDLE_REGEX, contentBlock, callback);
}

type RedraftProps = {
  decoratedText: string,
  children: any,
};

const RedraftHandle = ({ children, decoratedText }: RedraftProps) => (
  <a key={decoratedText} target="_blank" href={`https://twitter.com/${decoratedText.substring(1)}`}>
    {children}
  </a>
);

export const TwitterRedraftDecorator = {
  strategy: handleStrategy,
  component: RedraftHandle,
};

type Props = {
  offsetKey: string,
  children: any,
};

const HandleSpan = (props: Props) => (
  <span style={{ color: themeUtils.colors.pink }} data-offset-key={props.offsetKey}>
    {props.children}
  </span>
);

export default {
  strategy: handleStrategy,
  component: HandleSpan,
};
