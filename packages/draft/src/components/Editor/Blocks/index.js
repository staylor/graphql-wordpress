import Media from './Media';
import { blockquoteClass } from './styled';

export function blockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }

  return null;
}

export function blockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return blockquoteClass;
    default:
      return null;
  }
}
