import { combineReducers } from 'redux';

import authReducer from './authentication';
import removedBottlesReducer from './removedBottles';

export default combineReducers({
    authReducer,
    removedBottlesReducer,
});
