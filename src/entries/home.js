import React from 'react';
import { hydrate } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
//https://github.com/xgrommx/awesome-redux
//https://github.com/LogRocket/redux-logger
//https://github.com/zalmoxisus/redux-devtools-extension
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS());
//       console.log('vamos a enviar esta acción', action);
//       const value = next(action);
//       console.log('este es mi nuevo estado', getState().toJS());
//       return value
//     }
//   }
// }

const logger_ = ({ getState, dispatch}) => next => action => {
  console.log('este es mi viejo estado', getState().toJS());
  console.log('vamos a enviar esta acción', action);
  const value = next(action);
  console.log('este es mi nuevo estado', getState().toJS());
  return value
}

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    )
  ),
)

const homeContainer = document.getElementById('home-container')

hydrate( 
  <Provider store={store}>
    <Home />
  </Provider>  
, homeContainer);

