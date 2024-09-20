// store.js

import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';
import { themeReducer } from './themeReducer';

// Combine reducers
const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
});

// Create the store
export const store = createStore(rootReducer);
