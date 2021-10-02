import { combineReducers } from 'redux';

import authReducer, { AuthReducerProps } from './authentication';
import removedBottlesReducer, { RemovedBottlesReducerProps } from './removedBottles';
import userReducer, { UserReducerProps } from './user';

export type ReducerStateProps = {
    [k: string]: RemovedBottlesReducerProps & AuthReducerProps & UserReducerProps;
};

export default combineReducers({
    authReducer,
    removedBottlesReducer,
    userReducer,
});
