const { ConnectionHandler, ViewerHandler } = require('relay-runtime');

export default function handlerProvider(handle) {
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
