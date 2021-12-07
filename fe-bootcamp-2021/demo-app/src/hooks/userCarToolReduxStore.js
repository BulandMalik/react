import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { sortedItemsSelector } from "../selectors/itemToolSelectors";

import { 
    createAddAction, createEditAction, createDeleteAction, 
    createSaveAction, createSortAction, createCancelAction
} from "../actions/carToolActions";

export const useCarToolRedusStore = () => {

    const sortedCars = useSelector( sortedItemsSelector );
    const editCarId = useSelector( state => state.itemEditId );
    const { sortCol, sortDir } = useSelector(
        state => state.itemsSort);

    console.log("editCarId::",editCarId);
    console.log("sortCol::",sortCol,", sortDir",sortDir);

    const dispatch = useDispatch();

    const actions = bindActionCreators({
        addCar: createAddAction,
        editCar: createEditAction,
        saveCar: createSaveAction,
        deleteCar: createDeleteAction,
        cancelCar: createCancelAction,
        sortCars: createSortAction
    }, dispatch);

    return {
        sortedCars,
        editCarId,
        sortCol,
        sortDir,
        ...actions,
      };


};