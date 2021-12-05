
//****************** 1. import redux
const redux = require('redux');

//****************** 2noe. Create a basic reducer
/**
 * The reducer is nothing but a pure function that takes currentState and Action and returns a new state. 
 * A valid Reducer can return the current state. We have to create the Reducer before the store because it 
 * is needed for creating the store
 */
 const rootReducer = ( currentState = 0, action ) => { 

    //****************** 4. START - add reducer actions
    switch (action.type ) {
        case 'ADDITION':
            return currentState + 1;
        case 'SUBSTRACTION':
            return currentState - 1;
        default:
            return currentState;
    }

    //****************** 4. END - add reducer actions

    //return currentState;
};

////****************** 3. Create a store
// 2. create a store
const store = redux.createStore( rootReducer );
console.log( "Initial state: ", store.getState() ); //The store has few methods to execute. One of them is getState() to return current state
//Output:: 0 ---> current state as of now

////****************** 5. dispatch actions
//Another method that we execute on the store is to dispatch an action.
store.dispatch( {type: 'ADDITION'} ); //Usually, it takes a type and a Payload. But for simplicity, I will only pass a type for now.
console.log( "current state: ",store.getState() ); //The store has few methods to execute. One of them is getState() to return current state
//Output:: 1 ---> current state as of now