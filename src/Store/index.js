import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../Reducers';

export default createStore(
  rootReducer,
  applyMiddleware(logger)
);
