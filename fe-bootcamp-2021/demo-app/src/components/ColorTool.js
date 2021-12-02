import { useSortList, SORT_ASC, SORT_DESC } from "../hooks/useSortList";

import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, addColor, replaceItem, removeItem, 
          sortCol, setSortCol, sortDir, setSortDir ] = useSortList([ ...props.colors ], 'id', SORT_ASC);

  const sortColor = () => {
    if (sortCol === 'name' && sortDir === SORT_DESC) {
      setSortCol('id');
      setSortDir(SORT_ASC);
    } else if (sortCol === 'id') {
      setSortCol('name');
    } else {
      setSortDir(SORT_DESC);
    }
  };

  return (
    <>
      <ToolHeader headerText="Color Tool" />
      <ColorList colors={colors} onDeleteColor={removeItem}/>
      <ColorForm buttonText="Add Color" onSubmitColor={addColor}/>
      <button type="button" id="sort" onClick={sortColor}>Current Sort: {sortCol}-{sortDir}</button>
    </>
  );

};


ColorTool.defaultProps = {
  colors: [],
};