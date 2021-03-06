import reducers from './reducers/all-reducers';
import { createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const store = createStore(reducers, middleware);

export default store;