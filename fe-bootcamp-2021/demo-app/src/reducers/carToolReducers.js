import { 
    ADD_ACTION, EDIT_ACTION, DELETE_ACTION, 
    SAVE_ACTION, SORT_ITEMS_ACTION, CANCEL_ACTION
} from '../actions/carToolActions';

import { combineReducers } from 'redux';

import { SORT_ASC, SORT_DESC } from '../hooks/useSortedList';

const carList = [
    {id:1, make:'Toyota', model:'Sienna', year:2020, color:'Silver', price:'30000'},
    {id:2, make:'Toyota', model:'Corola', year:2021, color:'Green', price:'35000'},
    {id:3, make:'Toyota', model:'Sienna', year:2021, color:'Red', price:'32000'},
  ]

export const carReducer = ( cars = carList, action) => {

    //console.log("carReducer::",cars, ", action::",action);
    switch (action.type) {
        case ADD_ACTION:
            return [
                ...cars,
                {
                    ...action.payload.item,
                    id: Math.max(...cars.map(c => c.id)) +1,
                }    
            ];
        case SAVE_ACTION:
            {
                const newItems = [ ...cars ];
                const itemIndex = newItems.findIndex(c => c.id === action.payload.item.id);
                newItems[itemIndex] = action.payload.item;
                return newItems;
            }
        case DELETE_ACTION:
            return cars.filter( car => car.id !== action.payload.itemId );
        default:
            return cars;            
    };
}

export const itemEditReducer = ( itemId = -1, action) => {

    //console.log("itemEditReducer::",itemId, ", action::",action);
    switch (action.type) {
        case ADD_ACTION: 
        case SAVE_ACTION:
        case DELETE_ACTION:
        case CANCEL_ACTION:
        {
            //console.log("itemEditReducer --> -1");
            return -1;
        }
        case EDIT_ACTION:
            return action.payload.itemId;
        default:
            return itemId;            
    };
}

export const itemsSortReducer = (  itemsSort = {sortCol: 'id', sortDir: SORT_ASC}, action) => {

    //console.log("itemsSortReducer::",action);
    //console.log("itemsSort B::",itemsSort);
    if (action.type === SORT_ITEMS_ACTION) {

        if (itemsSort.sortDir === SORT_ASC) {
            return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: SORT_DESC};
        } else {
                return { ...itemsSort, sortCol: action.payload.sortCol, sortDir: SORT_ASC};
        }
    }
    //console.log("itemsSort A::",itemsSort);
    return itemsSort;
}  

export const itemReducer = combineReducers({
    items: carReducer, //state.items are the argument to the reducer
    itemEditId: itemEditReducer,
    itemsSort: itemsSortReducer,
});