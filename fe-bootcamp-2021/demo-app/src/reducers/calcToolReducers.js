import { ADD_ACTION, SUBSTRACT_ACTION, MULTIPLY_ACTION, DIVIDE_ACTION } from "../actions/calcToolActions";


//newstate = reducer (oldSatte, action)

export const calcToolReducers = (state = {result: 0}, action) => {
    switch (action.type) {
        case ADD_ACTION:
            return {
                ...state,
                result: state.result + action.payload.value,
            }
        case SUBSTRACT_ACTION:
            return {
                ...state,
                result: state.result - action.payload.value,
            }
        case MULTIPLY_ACTION:
            return {
                ...state,
                result: state.result * action.payload.value,
        }
        case DIVIDE_ACTION:
            return {
                ...state,
                result: state.result / action.payload.value,
        }
        default:
            return state; //return original state
    }

};