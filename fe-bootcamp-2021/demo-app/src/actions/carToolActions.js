
export const ADD_ACTION = "add";
export const EDIT_ACTION = "edit";
export const DELETE_ACTION = "delete";
export const CANCEL_ACTION = "cancel";

export const createAddAction = value => (
    { type: ADD_ACTION, payload: { value } }
);

export const createEditAction = value => (
    { type: EDIT_ACTION, payload: { value } }
);

export const createDeleteAction = value => (
    { type: DELETE_ACTION, payload: { value } }
);

export const createCancelAction = value => (
    { type: CANCEL_ACTION, payload: { value } }
);
