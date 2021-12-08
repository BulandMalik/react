import { all, addCar, editCar, deleteCar, replaceCar } from "../apis/cars";

export const ADD_ACTION = "add";
export const EDIT_ACTION = "edit";
export const SAVE_ACTION = "save";
export const DELETE_ACTION = "delete";
export const CANCEL_ACTION = "cancel";
export const SORT_ITEMS_ACTION = "sortItem";
//export const SORT_DIR_ACTION = "sortDir";

export const REFRESH_CARS_REQUEST_ACTION = "REFRESH_CARS_REQUEST_ACTION";
export const REFRESH_CARS_DONE_ACTION = "REFRESH_CARS_DONE_ACTION";

export const ADD_CAR_REQUEST_ACTION = "ADD_CAR_REQUEST_ACTION";
export const ADD_CAR_DONE_ACTION = "ADD_CAR_DONE_ACTION";

export const SAVE_CAR_REQUEST_ACTION = "SAVE_CAR_REQUEST_ACTION";
export const SAVE_CAR_DONE_ACTION = "SAVE_CAR_DONE_ACTION";

export const DELETE_CAR_REQUEST_ACTION = "DELETE_CAR_REQUEST_ACTION";
export const DELETE_CAR_DONE_ACTION = "DELETE_CAR_DONE_ACTION";

export const createRerfreshCarsRequestAction = () => ({type: REFRESH_CARS_REQUEST_ACTION});
export const createRerfreshCarsDoneAction = (cars) => ({
    type: REFRESH_CARS_DONE_ACTION, payload: { cars }
});
export const refreshCars = () => {

    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRerfreshCarsRequestAction());
        return all().then( cars => {
            dispatch(createRerfreshCarsDoneAction(cars));
        })
    };
};


export const createAddAction = item => (
    { type: ADD_ACTION, payload: { item } }
);
export const createAddCarsRequestAction = () => ({type: ADD_CAR_REQUEST_ACTION});
export const createAddCarsDoneAction = (car) => (
    {type: ADD_CAR_DONE_ACTION, payload: car}
);
export const addCarFn = (car) => {
    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createAddCarsRequestAction());
        return addCar(car).then( car => {
            dispatch(refreshCars());
        })
    };
};

export const createSaveAction = item => (
    { type: SAVE_ACTION, payload: { item } }
);
export const createSaveCarsRequestAction = () => ({type: SAVE_CAR_REQUEST_ACTION});
export const createSaveCarsDoneAction = (car) => (
    {type: SAVE_CAR_DONE_ACTION, payload: car}
);
export const saveCarFn = (car) => {
    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createAddCarsRequestAction());
        return replaceCar(car).then( car => {
            dispatch(refreshCars());
        })
    };
};

export const createEditAction = itemId => (
    { type: EDIT_ACTION, payload: { itemId } }
);

export const createDeleteAction = itemId => (
    { type: DELETE_ACTION, payload: { itemId } }
);
export const createDeleteCarRequestAction = () => ({type: DELETE_CAR_REQUEST_ACTION});
export const createDeleteCarDoneAction = (carId) => (
    {type: DELETE_CAR_DONE_ACTION, payload: carId}
);
export const deleteCarFn = (carId) => {
    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createDeleteCarRequestAction());
        return deleteCar(carId).then( car => {
            dispatch(refreshCars());
        })
    };
};


export const createCancelAction = () => (
    { type: CANCEL_ACTION }
);

export const createSortAction =  (sortCol) => (
    { type: SORT_ITEMS_ACTION, payload: { sortCol } }
);
/*
export const createSortDirAction =  () => (
    { type: SORT_DIR_ACTION }
);
*/
