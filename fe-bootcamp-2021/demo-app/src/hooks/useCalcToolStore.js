import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubtractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteHistoryEntryAction
} from '../actions/calcToolActions';

import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from "../actions/calcToolActions";

export const useCalcToolStore = () => {

  //making sure that result is not part of the sate to avoid duplicate state issue
  const result = useSelector(state => {
/*
    return state.history.reduce( (theResult, entry) => {
      switch (entry.opName) {
        case ADD_ACTION:
          theResult += entry.opValue;
          break;
        case SUBTRACT_ACTION:
          theResult -= entry.opValue;
          break;
        case MULTIPLY_ACTION:
          theResult *= entry.opValue;
          break;
        case DIVIDE_ACTION:
          theResult /= entry.opValue;
          break;
        default:
          break;
      }
    }, 0 /initial Value of theResult param
    );
  });    
*/
  let result = 0;
    
    state.history.forEach( entry => {
      switch (entry.opName) {
        case ADD_ACTION:
          result += entry.opValue;
          break;
        case SUBTRACT_ACTION:
          result -= entry.opValue;
          break;
        case MULTIPLY_ACTION:
          result *= entry.opValue;
          break;
        case DIVIDE_ACTION:
          result /= entry.opValue;
          break;
        default:
          break;
      }
    });

    return result;
  });

/*  
  const opsCount = useSelector(state => {
    let opsCount = [];
    
    state.history.forEach( entry => {
      switch (entry.opName) {
        case ADD_ACTION:          
          opCount = [
            ...opsCount,
            {
              'ADD': opCount[entry.opName] + 1,              
            }
          ]
        case SUBTRACT_ACTION:
          opCount = [
            ...opsCount,
            {
              'SUBTRACT': opCount[entry.opName] + 1,              
            }
          ]
        case MULTIPLY_ACTION:
          opCount = [
            ...opsCount,
            {
              'MULTIPLY': opCount[entry.opName] + 1,              
            }
          ]
        case DIVIDE_ACTION:
          opCount = [
            ...opsCount,
            {
              'DEVIDE': opCount[entry.opName] + 1,              
            }
          ]
        default:
          break;
      }
      });

      return opCount;      
    });
*/

  const opCounts = useSelector(state => {
    return state.history.reduce( (theOpCounts, entry) => {
      if (theOpCounts[entry.opName]) {
        theOpCounts[entry.opName]++;
      } else {
        theOpCounts[entry.opName] = 1;
      }
      return theOpCounts;
    }, {});
  });

  const history = useSelector(state => state.history);
  const errorMessage = useSelector(state => state.errorMessage);

  const dispatch = useDispatch();

  // const add = (...values) => {
  //   const addAction = createAddAction(...values);
  //   dispatch(addAction);
  // };

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubtractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteHistoryEntry: createDeleteHistoryEntryAction,
  }, dispatch);

  return {
    result,
    history,
    opCounts,
    errorMessage,
    ...boundActions,
  };

};