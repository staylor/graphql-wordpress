import React from 'react';
import type { ContentState, ContentBlock } from 'draft-js';
import Video from 'components/Videos/Video';
import Image from './Image';

type Props = {
  contentState: ContentState,
  block: ContentBlock,
};

export default function Media(props: Props) {
  const { contentState, block } = props;
  const entityKey = block.getEntityAt(0);
  if (!entityKey) {
    return null;
  }
  const entity = contentState.getEntity(entityKey);
  const type = entity.getType();

  if (type === 'EMBED') {
    const { html } = entity.getData();
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  }

  if (type === 'IMAGE') {
    return <Image {...{ contentState, entityKey, entity }} />;
  }

  if (type === 'VIDEO') {
    const { video } = entity.getData();
    return <Video video={video} embed />;
  }

  return null;
}
