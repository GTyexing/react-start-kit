import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Mult from './components/Mult';

import store, { history } from './store'

// const router = (
//   <Provider store={store}>
//     <Router history={ history }>
//       <Route path='/' component={ App } >
//         <IndexRoute 
//           getComponent={(location, callback) => {
//             require.ensure([], function(require) {
//               callback(null, require('./components/Add'));
//             }, 'add');
//           }}
//         />
//         <Route path='subtract' 
//           getComponent={(location, callback) => {
//             require.ensure([], function(require) {
//               callback(null, require('./components/Subtract'));
//             }, 'subtract');
//           }} 
//         />
//         <Route path='mult' 
//           getComponent={(location, callback) => {
//             require.ensure([], function(require) {
//               callback(null, require('./components/Mult'));
//             }, 'mult');
//           }} 
//         />
//       </Route>
//     </Router>
//   </Provider>
// )

const router = (
  <Provider store={store}>
    <Router history={ history }>
      <Route path='/' component={ App } >
        <IndexRoute component={ Add }/>
        <Route path='subtract' component={ Subtract }/>
        <Route path='mult' component={ Mult }/>
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.body.appendChild(document.createElement('div'))
);
