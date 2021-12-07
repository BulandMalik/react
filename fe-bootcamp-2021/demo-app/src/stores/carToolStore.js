import { createStore } from 'redux';

import { itemReducer } from '../reducers/carToolReducers';

export const carToolStore = createStore(itemReducer);