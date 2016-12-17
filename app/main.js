import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Mult from './components/Mult';

import store, { history } from './store'

// function errorLoading(err) {
//   console.error('Dynamic page loading failed', err);
// }

// function loadRoute(cb) {
//   return (module) => cb(null, module.default);
// }

// const rootRoute = {
//   component: App,
//   childRoutes: [
//     {
//       path: '/',
//       getComponent(location, cb) {
//         System.import('./components/Add')
//           .then(loadRoute(cb))
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'subtract',
//       getComponent(location, cb) {
//         System.import('./components/Subtract')
//           .then(loadRoute(cb))
//           .catch(errorLoading);
//       }
//     },
//     {
//       path: 'mult',
//       getComponent(location, cb) {
//         System.import('./components/Mult')
//           .then(loadRoute(cb))
//           .catch(errorLoading);
//       }
//     }
//   ]
// }

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={ App } >
        <IndexRoute component={Add} />
        <Route path='/subtract' component={Subtract} />
        <Route path='/mult' component={Mult} />
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.body.appendChild(document.createElement('div'))
);
