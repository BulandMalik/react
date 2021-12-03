import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
    createAddAction, createSubstractAction, 
    createMultiplyAction, createDivideAction
} from '../actions/calcToolActions';

export const useCalcToolStore = () => {

    const result = useSelector(state => state.result);

    const disptach = useDispatch();
    const boundActions = bindActionCreators({
        add: createAddAction,
        subtract: createSubstractAction,
        multiply: createMultiplyAction,
        divide: createDivideAction,
    }, disptach);

    return {
        result,
        ...boundActions,
    }

};