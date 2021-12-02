import { useState} from "react";
import { useSortedList, SORT_ASC, SORT_DESC } from '../hooks/useSortedList';

import { useList } from "../hooks/useList";

import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  //const [ cars, appendCar, replaceCar, removeCar ] = useList([ ...props.cars ]);

  const [ editCarId, setEditCarId ] = useState(-1);

  const [
    sortedCars, appendCar,replaceCar,removeCar,
    sortCol, setSortCol, sortDir, setSortDir
  ] = useSortedList([ ...props.cars ], 'id', SORT_ASC);

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

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={sortedCars} editCarId={editCarId}
        onEditCar={editCar} onDeleteCar={deleteCar}
        onSaveCar={saveCar} onCancelCar={cancelCar} 
        onSort={sortCars} sortCol={sortCol} sortDir={sortDir}/>
      <CarForm buttonText="Add Car" onSubmitCar={addCar} />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};