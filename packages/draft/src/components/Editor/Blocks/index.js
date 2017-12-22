import Media from './Media';
import { blockquoteClass, paragraphClass } from './styled';

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
    case 'unstyled':
      return paragraphClass;
    default:
      return null;
  }
}
