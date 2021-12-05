import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
  createAddAction, createSubstractAction,
  createMultiplyAction, createDivideAction,
  createClearAction, createDeleteAction
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

  const result = useSelector(state => state.result);
  const history = useSelector(state => state.history);

  const dispatch = useDispatch();

  // const add = (...values) => {
  //   const addAction = createAddAction(...values);
  //   dispatch(addAction);
  // };

  const boundActions = bindActionCreators({
    add: createAddAction,
    subtract: createSubstractAction,
    multiply: createMultiplyAction,
    divide: createDivideAction,
    clear: createClearAction,
    deleteMe: createDeleteAction,
  }, dispatch);

  return {
    result,
    history,
    ...boundActions,
  };

};