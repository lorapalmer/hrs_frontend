// redux methods which help to configure redux store
import {createStore, applyMiddleware, compose} from 'redux';
// logger which needed only for development purposes
import {createLogger} from 'redux-logger';
// main reducer
import reducer from './rootReducer';
// middleware for API requests
import thunk from 'redux-thunk';

// functions invocations to build redux store
const logger = createLogger({collapsed: true}),
  createStoreWithMiddleware = applyMiddleware(thunk, logger),
  store = createStore(reducer, compose(createStoreWithMiddleware));

export default store;
