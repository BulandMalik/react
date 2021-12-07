//purpose of thos hook is to have disptach
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { 
    createAddColorAction, createDeleteColorAction, createSortColorAction 
} from "../actions/colorToolActions";

//import { createAddColorAction } from "../actions/ColorToolsActions";
import { sortedColorsSelector } from "../selectors/colorToolSelectors";


export const useColorToolReduxStore = () => {

    const sortedColors = useSelector( sortedColorsSelector );
    const { col: sortCol, dir: sortDir } = useSelector(
        state => state.colorsSort);

    const dispatch = useDispatch();

    const actions = bindActionCreators({
        addColor: createAddColorAction,
        deleteColor: createDeleteColorAction,
        sortColors: createSortColorAction
    }, dispatch);

    return {
        sortedColors,
        sortCol,
        sortDir,
        ...actions,
      };

}