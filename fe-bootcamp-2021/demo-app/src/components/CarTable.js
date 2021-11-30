import { CarRow } from './CarRow';
import { CarEditRow } from './CarEditRow';
import PropTypes from 'prop-types';
import { useState } from "react";

export const CarTable = (props) => {

    const [editCarId, setEditCarId ] = useState('');

    const onDeleteCar = (carId) => {
        props.onDeleteClick( carId );
    };

    const onSaveCar = (updatedCar) => {
        console.log("Save Car -->",updatedCar);
        props.onSaveCar(updatedCar);
        setEditCarId('');
    };

    const onCancelEditCar = () => {
        setEditCarId('');
    };

    const onEditCar = (carId) => {
        setEditCarId(carId);
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
                    {props.cars.map( car => 
                                    //console.log(car.id, editCarId, (car.id === editCarId))
                                    ( parseInt(car.id,10) !== parseInt(editCarId,10) )
                                    ? <CarRow key={car.id} car={car} onDeleteCar={onDeleteCar} onEditCar={onEditCar}/>
                                    : <CarEditRow key={car.id} car={car} onSaveCar={onSaveCar} onCancelEditCar={onCancelEditCar}/> 
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