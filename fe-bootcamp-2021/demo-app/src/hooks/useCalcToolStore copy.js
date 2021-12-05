import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
    createAddAction, createSubstractAction, 
    createMultiplyAction, createDivideAction,
    createClearAction
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

    const result = useSelector(state => [state.result, state.history] ) ;

    const disptach = useDispatch();
    const boundActions = bindActionCreators({
        add: createAddAction,
        subtract: createSubstractAction,
        multiply: createMultiplyAction,
        divide: createDivideAction,
        clear: createClearAction
    }, disptach);

    return {
        result,
        ...boundActions,
    }

};