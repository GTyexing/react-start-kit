import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.js';

const router = (
  <Router history={ browserHistory }>
    <Route path='/' component={ App } />
  </Router>
)

render(
  router,
  // <App />,
  document.body.appendChild(document.createElement('div'))
);
