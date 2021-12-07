
export const ADD_ACTION = "add";
export const EDIT_ACTION = "edit";
export const SAVE_ACTION = "save";
export const DELETE_ACTION = "delete";
export const CANCEL_ACTION = "cancel";
export const SORT_ITEMS_ACTION = "sortItem";
//export const SORT_DIR_ACTION = "sortDir";

export const createAddAction = item => (
    { type: ADD_ACTION, payload: { item } }
);

export const createSaveAction = item => (
    { type: SAVE_ACTION, payload: { item } }
);

export const createEditAction = itemId => (
    { type: EDIT_ACTION, payload: { itemId } }
);

export const createDeleteAction = itemId => (
    { type: DELETE_ACTION, payload: { itemId } }
);

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
