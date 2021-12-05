

import {
    ADD_ACTION, SUBSTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
    CLEAR_ACTION,DELETE_ACTION
  } from "../actions/calcToolActions";
  
  
  const resultReducer = (/*stae=0*/ result = 0, axction) => {

    switch (action.type) {
        case ADD_ACTION:
          return {
            ...state,
            result: state.result + action.payload.value,
            history: [ ...state.history, {
              id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
              opName: ADD_ACTION,
              opValue: action.payload.value,
            }],
          };
        case SUBSTRACT_ACTION:
          return {
            ...state,
            result: state.result - action.payload.value,
            history: [ ...state.history, {
              id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
              opName: SUBSTRACT_ACTION,
              opValue: action.payload.value,
            }],
          };
        case MULTIPLY_ACTION:
          return {
            ...state,
            result: state.result * action.payload.value,
            history: [ ...state.history, {
              id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
              opName: MULTIPLY_ACTION,
              opValue: action.payload.value,
            }],
          };
        case DIVIDE_ACTION:
          return {
            ...state,
            result: state.result / action.payload.value,
            history: [ ...state.history, {
              id: Math.max(...state.history.map(entry => entry.id), 0) + 1,
              opName: DIVIDE_ACTION,
              opValue: action.payload.value,
            }],
          };
        case CLEAR_ACTION:
          return {
            ...state,
            result: 0,
            history: [],
          }
          case DELETE_ACTION:
              return {
                ...state,
                history: [ ...state.history.filter( h => {
                      console.log(action.payload.value);
                      return (h.id !== action.payload.value)
                  })],
              }        
        default:
          return state;
      }    

  };

  const historyReducer = (/*stae=0*/ result = 0, axction) => {

  };

  export const calcToolReducer = (state = { result: 0, history: [] }, action) => {
  

  
  };