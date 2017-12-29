import type { ContentBlock } from 'draft-js';
import Media from './Media';
import { blockquoteClass, paragraphClass } from './styled';

export function blockRenderer(block: ContentBlock) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}

export function blockStyle(block: ContentBlock) {
  switch (block.getType()) {
    case 'blockquote':
      return blockquoteClass;
    case 'unstyled':
      return paragraphClass;
    default:
      return null;
  }
}
