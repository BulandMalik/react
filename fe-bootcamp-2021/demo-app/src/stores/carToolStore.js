import { createStore, applyMiddleware } from 'redux';

import { itemReducer } from '../reducers/carToolReducers';

import thunk from 'redux-thunk';

export const carToolStore = createStore(
    itemReducer,
    applyMiddleware(thunk),
);