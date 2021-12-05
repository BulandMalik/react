

import {
    ADD_ACTION, SUBSTRACT_ACTION,
    MULTIPLY_ACTION, DIVIDE_ACTION,
    CLEAR_ACTION,DELETE_ACTION
  } from "../actions/calcToolActions";
  
  
  const resultReducer = (/*stae=0*/ result = 0, action) => {

    switch (action.type) {
        case ADD_ACTION:
          return result + action.payload.value;
        case SUBSTRACT_ACTION:
            return result - action.payload.value;
        case MULTIPLY_ACTION:
            return result * action.payload.value;
        case DIVIDE_ACTION:
            return result / action.payload.value;
        case CLEAR_ACTION:
          return {
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

  const historyReducer = (history = [], axction) => {

  };

  export const calcToolReducer = (state = { result: 0, history: [] }, action) => {
  

  
  };