import { createStore, applyMiddleware } from 'redux';

import { colorToolReducer } from '../reducers/colorToolReducers';

import thunk from 'redux-thunk';

export const colorToolStore = createStore(
    colorToolReducer,
    applyMiddleware(thunk),
);