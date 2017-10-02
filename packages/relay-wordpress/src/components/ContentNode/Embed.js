import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import { embed } from 'wp-styled-components';

export default createFragmentContainer(
  ({ node, onEmbedClick = null }) => {
    const onClick = onEmbedClick ? onEmbedClick(node) : null;
    const thumbnailUrl = node.thumbnailUrl.replace('hqdefault', 'maxresdefault');
    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <figure onClick={onClick} className={embed}>
        <img src={thumbnailUrl} alt={node.title} />
        <figcaption>{node.title}</figcaption>
      </figure>
    );
  },
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
