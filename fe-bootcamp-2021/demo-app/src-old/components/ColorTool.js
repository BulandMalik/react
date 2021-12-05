//import { useColorToolStore } from "../hooks/useColorToolStore";
import { useColorToolStoreContext } from "../context/colorToolStoreContext";

//import { ToolHeader } from "./ToolHeader";
import { ColorList } from './ColorList';
import { ColorForm } from './ColorForm';

//export const ColorTool = ( {cars: initialCars} ) => {
//export const ColorTool = (props) => {
export const ColorTool = () => {

 /* //Array Destructuring
  const [
    sortedColors,addColor,replaceColor,
    removeColor,sortCol, sortDir, sortColors] 
  = useColorToolStore([...props.colors]);
*/

/* //Object Destructuring
  const {}
    sortedColors,addColor,replaceColor,
    removeColor,sortCol, sortDir, sortColors}
  = useColorToolStore([...props.colors]);
*/
//const store = useColorToolStore([...initialCars]);
//const store = useColorToolStore([...props.colors]);

//this makes this children a consumer of Context
const store = useColorToolStoreContext();

  return (
    <>
      <ColorList colors={store.sortedColors} onDeleteColor={store.removeColor}/>
      <ColorForm buttonText="Add Color" onSubmitColor={store.addColor}/>
      <button type="button" id="sort" onClick={store.sortColors}>Current Sort: {store.sortCol}-{store.sortDir}</button>
    </>
  );

};


ColorTool.defaultProps = {
  colors: [],
};