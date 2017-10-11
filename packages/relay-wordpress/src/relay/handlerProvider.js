// @flow
import { ConnectionHandler, ViewerHandler } from 'relay-runtime';

export default function handlerProvider(handle: string) {
  switch (handle) {
    // Augment (or remove from) this list:
    case 'connection':
      return ConnectionHandler;
    case 'viewer':
      return ViewerHandler;
    default:
      break;
  }
  throw new Error(`handlerProvider: No handler provided for ${handle}`);
}
