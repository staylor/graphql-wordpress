import React from 'react';
import { linkClass } from '../styled';

/* eslint-disable react/prop-types */

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK';
  }, callback);
}

const Link = ({ contentState, entityKey, children }) => {
  const { href } = contentState.getEntity(entityKey).getData();
  return (
    <a href={href} className={linkClass}>
      {children}
    </a>
  );
};

export default [
  {
    strategy: findLinkEntities,
    component: Link,
  },
];