import { createStore, applyMiddleware } from 'redux';
import authReducer from 'services/reducers/authentication';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const Store = createStore(authReducer, middleware);

export default Store;
