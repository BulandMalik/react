//purpose of thos hook is to have disptach
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useEffect, useMemo } from "react";

import { 
    addColor1, deleteColor1, 
    //createDeleteColorAction, 
    createSortColorAction, refreshColors
} from "../actions/colorToolActions";

//import { createAddColorAction } from "../actions/ColorToolsActions";
import { sortedColorsSelector } from "../selectors/colorToolSelectors";


export const useColorToolReduxStore = () => {

    const sortedColors = useSelector( sortedColorsSelector );
    const { col: sortCol, dir: sortDir } = useSelector(
        state => state.colorsSort);

    const dispatch = useDispatch();

    const actions = useMemo( () => bindActionCreators({
        refreshColors,
        //addColor: createAddColorAction,
        addColor: addColor1,
        //deleteColor: createDeleteColorAction,
        deleteColor: deleteColor1,
        sortColors: createSortColorAction
    }, dispatch), [dispatch]); //dispatch function never changes


    useEffect( () => {
        actions.refreshColors(); //stale closure as every render bind creates new refreshColors
    }, [actions]); //actions chnages every single render, thast the problem

    return {
        sortedColors,
        sortCol,
        sortDir,
        ...actions,
      };

}