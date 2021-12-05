
import { useCarToolStoreContext } from "../context/carToolStoreContext";

import { CarForm } from './CarForm';

export const CarFormContainer = () => {

  const store = useCarToolStoreContext();

  return (
    <>
      <CarForm buttonText="Add Car" onSubmitCar={store.addCar} />
    </>
  );

};