import { all, addColor, deleteColor } from '../apis/colors';

export const ADD_COLOR_ACTION = 'ADD_COLOR';
export const DELETE_COLOR_ACTION = 'DELETE_COLOR'
export const SORT_COLORS_ACTION = "SORT_COLORS";

export const REFRESH_COLORS_REQUEST_ACTION = "REFRESH_COLORS_REQUEST_ACTION";
export const REFRESH_COLORS_DONE_ACTION = "REFRESH_COLORS_DONE_ACTION";

export const ADD_COLOR_REQUEST_ACTION = "ADD_COLOR_REQUEST_ACTION";
export const ADD_COLOR_DONE_ACTION = "ADD_COLOR_DONE_ACTION";

export const DELETE_COLOR_REQUEST_ACTION = "DELETE_COLOR_REQUEST_ACTION";
//export const ADD_COLOR_DONE_ACTION = "ADD_COLOR_DONE_ACTION";


export const createRerfreshColorsRequestAction = () => ({type: REFRESH_COLORS_REQUEST_ACTION});
export const createRerfreshColorsDoneAction = (colors) => ({
    type: REFRESH_COLORS_DONE_ACTION, payload: { colors }
});
export const refreshColors = () => {

    //it is the function action object that intercepted by middleware
    //when the middleware invokes this function is passes in the store's dispatch method
    return dispatch => {
        dispatch(createRerfreshColorsRequestAction());
        return all().then( colors => {
            dispatch(createRerfreshColorsDoneAction(colors));
        })
    };
}

export const createAddColorRequestAction = color => (
    {type: ADD_COLOR_REQUEST_ACTION, payload: {color} }
);
export const createAddColorDoneAction = color => (
    {type: ADD_COLOR_DONE_ACTION, payload: {color} }
);
export const addColor1 = color => {

    return dispatch => {
        dispatch( createAddColorRequestAction(color) );
        return addColor(color).then( color => {
            dispatch( refreshColors() );
        });
    };
};

export const createDeleteColorAction = colorId => (
    {type: DELETE_COLOR_ACTION, payload: {colorId} }
);
export const createDeleteColorRequestAction = colorId => (
    {type:DELETE_COLOR_REQUEST_ACTION, payload: {colorId} }
);
export const deleteColor1 = colorId => {

    return dispatch => {
        dispatch( createDeleteColorAction(colorId) );
        return deleteColor(colorId).then( color => {
            dispatch( refreshColors() );
        });
    };
};

export const createSortColorAction =  () => (
    { type: SORT_COLORS_ACTION }
);