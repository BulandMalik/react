
//import { useCarToolStoreContext } from "../context/carToolStoreContext";
import { useCarToolReduxStore } from "../hooks/userCarToolReduxStore";

import { CarTable } from './CarTable';

export const CarTableContainer = () => {

  //const store = useCarToolStoreContext();
  const store = useCarToolReduxStore();

  return (
    <>
      <CarTable cars={store.sortedCars} editCarId={store.editCarId}
        onEditCar={store.editCar} onDeleteCar={store.deleteCar}
        onSaveCar={store.saveCar} onCancelCar={store.cancelCar} 
        onSort={store.sortCars} sortCol={store.sortCol} sortDir={store.sortDir}/>
    </>
  );

};