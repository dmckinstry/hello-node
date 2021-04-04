import { combineReducers } from 'redux';

/* Import reducers and combine them below */
import exampleReducer from './example';
import dataFetchReducer from './dataFetch';

export default combineReducers({
    exampleReducer,
    dataFetchReducer
});
