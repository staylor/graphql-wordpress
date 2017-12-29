// @flow
import React from 'react';
import type { ContentBlock, ContentState } from 'draft-js';
import { linkClass } from '../styled';

function findLinkEntities(
  contentBlock: ContentBlock,
  callback: () => void,
  contentState: ContentState
) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    if (!entityKey) {
      return false;
    }
    return contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

type Props = {
  contentState: ContentState,
  entityKey: string,
  children: any,
};

const Link = ({ contentState, entityKey, children }: Props) => {
  const { href } = contentState.getEntity(entityKey).getData();
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
};

export default {
  strategy: findLinkEntities,
  component: Link,
};
