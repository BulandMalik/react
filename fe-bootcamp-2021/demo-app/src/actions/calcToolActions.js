//define list of actions calculator will do

export const ADD_ACTION = "ADD";
export const SUBSTRACT_ACTION = 'SUBTRACT';
export const MULTIPLY_ACTION = 'multiply';
export const DIVIDE_ACTION = 'divide';

//function to produce payload for each action
export const createAddAction = value => (
    { type: ADD_ACTION, payload: { value } }
);

export const createSubstractAction = value => (
    { type: SUBSTRACT_ACTION, payload: { value } }
);

export const createMultiplyAction = value => (
    { type: MULTIPLY_ACTION, payload: { value } }
);

export const createDivideAction = value => (
    { type: DIVIDE_ACTION, payload: { value } }
);
