import { useList } from "../hooks/useList";

import { useState } from "react";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

const nameSortDesc = (a,b) => { if (a.name > b.name) return -1; if (a.name < b.name) return 1; return 0; };

const nameSortAsc = (a,b) => { if (a.name > b.name) return 1; if (a.name < b.name) return -1; return 0; };

const idSort = (a,b) => { if (a.id > b.id) return 1; if (a.id < b.id) return -1; return 0; };

export const ColorTool = (props) => {

  const [sortState, setSortState] = useState('A');

  const [ colors, appendItem, replaceItem, removeItem ] = useList([ ...props.colors ]);

  const addColor = (newColor) => {
    appendItem(newColor);
    //sortColor();
  };

  const removeColor = (itemId) => {
    console.log("removeColor:",itemId);
    removeItem(parseInt(itemId));
  };

  const sortColor = (e) => {

    console.log("sortState:",sortState);
    if ( sortState === 'A') setSortState('D');
    else setSortState('A');

    console.log(colors);
    console.log("e:",e);
    const newColors = [...colors];
    //const newColors = colors;
    if ( typeof e !== `undefined` && e.target.id==='sort') {
      if ( sortState === 'A' )
        newColors.sort( nameSortAsc );
      else
      newColors.sort( nameSortDesc );
    }
    else {
      newColors.sort( idSort );
    }
    console.log(newColors);
    newColors.forEach( color => replaceItem(color));
    console.log(colors);
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeColor} onSortColor={sortColor}/>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor}/>
      <button type="button" id="sort" onClick={sortColor}>Sort Colors in {sortState}</button>
    </>
  );

};


ColorTool.defaultProps = {
  colors: [],
};