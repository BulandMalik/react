import { ADD_ACTION, EDIT_ACTION, DELETE_ACTION, CANCEL_ACTION} from '../actions/carToolActions';

export const carReducer = ( 
        initialCars = [], 
        sortCol = 'Id',
        sortDir = 'asc',
        action) => {

    const [
        sortedCars, appendCar,replaceCar,removeCar,
        sortCol, setSortCol, sortDir, setSortDir
    ] = useSortedList(initialCars, 'id', SORT_ASC);

    switch (action.type) {
        case ADD_ACTION:
            return result + action.payload.value;
        case SUBTRACT_ACTION:
            return result - action.payload.value;
        case MULTIPLY_ACTION:
            return result * action.payload.value;
        case DIVIDE_ACTION:
            if (action.payload.value === 0) {
            return result;
            }
            return result / action.payload.value;
        case CLEAR_ACTION:
            return 0;
        default:
            return result;            
};

export const sortColReducer = ( 
    cars = [], 
    carId = -1,
    sortCol = 'Id',
    sortDir = 'asc',
    action) => {

};

export const sortDirReducer = ( 
    cars = [], 
    carId = -1,
    sortCol = 'Id',
    sortDir = 'asc',
    action) => {

};
