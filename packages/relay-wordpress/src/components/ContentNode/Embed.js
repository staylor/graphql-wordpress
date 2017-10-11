// @flow
import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { embed } from '@wonderboymusic/graphql-wordpress-components';
import type { Embed as EmbedType } from 'relay-wordpress';

type EmbedProps = {
  node: EmbedType,
  onEmbedClick: any,
};

const Embed = ({ node, onEmbedClick }: EmbedProps) => {
  const onClick = onEmbedClick ? onEmbedClick(node) : null;
  const thumbnailUrl = node.thumbnailUrl.replace('hqdefault', 'maxresdefault');
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <figure onClick={onClick} className={embed}>
      <img src={thumbnailUrl} alt={node.title} />
      <figcaption>{node.title}</figcaption>
    </figure>
  );
};

export default createFragmentContainer(
  Embed,
  graphql`
    fragment Embed_node on Embed {
      title
      thumbnailUrl
      html
      width
      height
    }
  `
);
