import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux';

// allows use of Redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;
