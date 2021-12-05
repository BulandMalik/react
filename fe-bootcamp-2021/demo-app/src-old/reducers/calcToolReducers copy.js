import { ADD_ACTION, SUBSTRACT_ACTION, 
        MULTIPLY_ACTION, DIVIDE_ACTION,
        CLEAR_ACTION} from "../actions/calcToolActions";


//newstate = reducer (oldSatte, action)

export const calcToolReducers = (state = 
    {
        result: 0, 
        history: [] 
    }, action) => {

    switch (action.type) {
        case ADD_ACTION:
            return {
                ...state,
                result: state.result + action.payload.value,
                history: [
                    ...state.history,
                    "add:"+action.payload.value
                ]
            }
        case SUBSTRACT_ACTION:
            return {
                ...state,
                result: state.result - action.payload.value,
                history: [
                    ...state.history,
                    "subtract:"+action.payload.value
                ]
            }
        case MULTIPLY_ACTION:
            return {
                ...state,
                result: state.result * action.payload.value,
                history: [
                    ...state.history,
                    "multiply:"+action.payload.value
                ]                
        }
        case DIVIDE_ACTION:
            console.log("Dstate:",state);
            return {
                ...state,
                result: state.result / action.payload.value,
                history: [
                    ...state.history,
                    "divide:"+action.payload.value
                ]
        }
        case CLEAR_ACTION:
            console.log("Cstate:",state);
            return {
                result: 0,
                history: []
            }
        default:
            return state; //return original state
    }

};