// REDUX METHODS
import {createStore, applyMiddleware, compose} from 'redux';
// LOGGER MIDDLEWARE
import {createLogger} from 'redux-logger';
// API REQUESTS MIDDLEWARE
import thunk from 'redux-thunk';
// MAIN REDUCER
import reducer from './rootReducer';
// DEPENDENCY CONTAINER
import container from '../app/supplier/container';

// FUNCTION COMPOSITION PATTERN FOR REDUX STORE BUILDING
const logger = createLogger({collapsed: true}),
  createStoreWithMiddleware = applyMiddleware(
    thunk.withExtraArgument(container),
    logger,
  ),
  store = createStore(reducer, compose(createStoreWithMiddleware));

export default store;
