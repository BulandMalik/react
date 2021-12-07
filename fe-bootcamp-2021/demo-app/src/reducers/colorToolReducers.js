import { combineReducers } from "redux";

import { 
    ADD_COLOR_ACTION, DELETE_COLOR_ACTION, SORT_COLORS_ACTION 
} from "../actions/colorToolActions";

const colorList = [
    {id:1, name: 'Red', hexcode:'ff0000'},
    {id:2, name: 'Green', hexcode:'00ff00'},
    {id:3, name: 'Blue', hexcode:'0000ff'},
    {id:5, name: 'Green', hexcode:'0000ff'},
    {id:4, name: 'Brown', hexcode:'0000ff'},
  ];

export const colorsReducer = ( colors = colorList, action ) => {
    switch (action.type) {
        case ADD_COLOR_ACTION:
            return [
                ...colors,
                {
                    ...action.payload.color,
                    id: Math.max(...colors.map(c => c.id)),
                }
            ];
        case DELETE_COLOR_ACTION:
            return colors.filter( color => color.id !== action.payload.colorId );         
        default:
            return colors;
    }

};

export const sortDirReducer = (sortDir = 'asc', action) => {
    if (action.type === SORT_COLORS_ACTION) { //actual rendring logic goes to selector
        return (sortDir === 'asc' ? 'desc' : 'asc');
    }
};

export const colorsSortReducer = (
    colorsSort = { col: 'id', dir: 'asc' }, action) => {
  
    if (action.type === SORT_COLORS_ACTION) {
      if (colorsSort.col === 'id') {
        return { ...colorsSort, col: 'name' };
      } else {
        if (colorsSort.dir === 'asc') {
          return { ...colorsSort, dir: 'desc'};
        } else {
          return { ...colorsSort, col: 'id', dir: 'asc'};
        }
      }
    }
  
    return colorsSort;
  }

export const colorToolReducer = combineReducers({
    colors: colorsReducer, //state.colors are the argument to the reducer
    //sortDir: sortDirReducer,
    colorsSort: colorsSortReducer,
});