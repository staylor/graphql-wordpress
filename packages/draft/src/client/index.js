import React from 'react';
import ReactDOM from 'react-dom';
import { hydrate } from 'emotion';
import App from 'components/App';

if (window.__emotion) {
  hydrate(window.__emotion);
}

ReactDOM.hydrate(<App />, document.getElementById('main'));
