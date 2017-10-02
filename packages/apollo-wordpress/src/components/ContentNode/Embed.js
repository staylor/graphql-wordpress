import React from 'react';
import PropTypes from 'prop-types';
import { embed } from 'wp-styled-components';

export default function Embed({ node, onEmbedClick = null }) {
  const onClick = onEmbedClick ? onEmbedClick(node) : null;
  const thumbnailUrl = node.thumbnailUrl.replace('hqdefault', 'maxresdefault');
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <figure onClick={onClick} className={embed}>
      <img src={thumbnailUrl} alt={node.title} />
      <figcaption>{node.title}</figcaption>
    </figure>
  );
}

Embed.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  node: PropTypes.object.isRequired,
  onEmbedClick: PropTypes.func,
};

Embed.defaultProps = {
  onEmbedClick: null,
};
