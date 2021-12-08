import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { sortedItemsSelector } from "../selectors/itemToolSelectors";

import { 
    createAddAction, createEditAction, createDeleteAction, 
    createSaveAction, createSortAction, createCancelAction,
    refreshCars, addCarFn, saveCarFn, deleteCarFn
} from "../actions/carToolActions";

export const useCarToolRedusStore = () => {

    const sortedCars = useSelector( sortedItemsSelector );
    const editCarId = useSelector( state => state.itemEditId );
    const { sortCol, sortDir } = useSelector(
        state => state.itemsSort);

    console.log("editCarId::",editCarId);
    console.log("sortCol::",sortCol,", sortDir",sortDir);

    const dispatch = useDispatch();

    const actions = useMemo( () => bindActionCreators({
        refreshCars,
        //addCar: createAddAction,
        addCar: addCarFn,
        editCar: createEditAction,
        //saveCar: createSaveAction,
        saveCar: saveCarFn,
        //deleteCar: createDeleteAction,
        deleteCar: deleteCarFn,
        cancelCar: createCancelAction,
        sortCars: createSortAction
    }, dispatch), [dispatch]);

    useEffect( () => {
        actions.refreshCars(); //stale closure as every render bind creates new refreshColors
    }, [actions]); //actions chnages every single render, thast the problem

    return {
        sortedCars,
        editCarId,
        sortCol,
        sortDir,
        ...actions,
      };


};