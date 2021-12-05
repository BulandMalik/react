import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';
import { useState} from "react";
//import { useList } from "../hooks/useList";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import {
    createAddAction
  } from '../actions/carToolActions';

export const useCarToolStore = initialCars => {

      //const [ cars, appendCar, replaceCar, removeCar ] = useList([ ...props.cars ]);

    const result = useSelector(state => state.cars);
    const history = useSelector(state => state.history);
    const errorMessage = useSelector(state => state.errorMessage);

    const dispatch = useDispatch();
    
    const [ editCarId, setEditCarId ] = useState(-1);

    const [
        sortedCars, appendCar,replaceCar,removeCar,
        sortCol, setSortCol, sortDir, setSortDir
    ] = useSortedList(initialCars, 'id', SORT_ASC);

    const addCar = newCar => {
        appendCar(newCar);
        setEditCarId(-1);
    };

    const saveCar = car => {
        replaceCar(car);
        setEditCarId(-1);
    };

    const deleteCar = carId => {
        removeCar(carId);
        setEditCarId(-1);
    };

    const editCar = carId => {
        setEditCarId(carId);
    };

    const cancelCar = () => {
        setEditCarId(-1);
    };

    const sortCars = (colName) => {

    console.log("colName:",colName);
    if ( sortDir === SORT_DESC) {
        setSortDir(SORT_ASC);
    } else {
        setSortDir(SORT_DESC);
    }
    setSortCol(colName);
    };

    return {
        sortedCars,
        editCarId,
        addCar,
        editCar,
        deleteCar,
        saveCar,
        cancelCar,
        sortCars,
        sortCol,
        sortDir

    };
};