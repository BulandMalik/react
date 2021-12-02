import { CarRow } from './CarRow';
import { CarEditRow } from './CarEditRow';
import PropTypes from 'prop-types';
//import { useState } from "react";

export const CarTable = (props) => {

    //const [editCarId, setEditCarId ] = useState(-1);

    const onDeleteCar = (carId) => {
        props.onDeleteClick( carId );
        //setEditCarId(-1);
    };

    const onSaveCar = (updatedCar) => {
        console.log("Save Car -->",updatedCar);
        props.onSaveCar(updatedCar);
        //setEditCarId(-1);
    };

    const onCancelEditCar = () => {
        props.onCancelCar();
        //setEditCarId(-1);
    };

    const onEditCar = (carId) => {
        props.onEditCar(carId);
        //setEditCarId(carId);
    };    

    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("editCarId:",props.editCarId)}
                    {props.cars.map( car => 
                                    
                                    ( parseInt(props.editCarId,10) === parseInt(car.id,10) )
                                    ? <CarEditRow key={car.id} car={car} 
                                            onSaveCar={onSaveCar} 
                                            onCancelEditCar={onCancelEditCar}/> 
                                    : <CarRow key={car.id} car={car} 
                                            onDeleteCar={onDeleteCar} 
                                            onEditCar={onEditCar}/>
                                )}
                </tbody>
            </table>   
        </>     
    );

};

//default props are react specific thing and not js
CarTable.defaultProps = {
    cars: [],
}

CarTable.propTypes = {
    cars: PropTypes.array.isRequired
}