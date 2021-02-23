import { combineReducers } from 'redux';

import authReducer, { AuthReducerProps } from './authentication';
import removedBottlesReducer, { RemovedBottlesReducerProps } from './removedBottles';

export type ReducerStateProps = { [k: string]: RemovedBottlesReducerProps & AuthReducerProps };

export default combineReducers({
    authReducer,
    removedBottlesReducer,
});
