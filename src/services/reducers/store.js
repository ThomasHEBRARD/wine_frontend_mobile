import { createStore, applyMiddleware } from 'redux';
import authReducer from 'services/reducers/authentication';
import thunk from 'redux-thunk';
import combinedReducers from './combinedReducers';

const middleware = applyMiddleware(thunk);

const Store = createStore(combinedReducers, middleware);

export default Store;
