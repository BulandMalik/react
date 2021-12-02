import { CarRow } from './CarRow';
import { CarEditRow } from './CarEditRow';
import PropTypes from 'prop-types';
import { useState } from "react";

export const CarTable = (props) => {

    const [editCarIds, setEditCarId ] = useState([]);

    const onDeleteCar = (carId) => {
        props.onDeleteClick( carId );
        setEditCarId([]);
    };

    const onSaveCar = (updatedCar) => {
        console.log("Save Car -->",updatedCar);
        props.onSaveCar(updatedCar);
        setEditCarId([]);
    };

    const onCancelEditCar = () => {
        setEditCarId([]);
    };

    const onEditCar = (carId) => {
        setEditCarId([
            ...editCarIds,
            carId
        ]);
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
                                    ( editCarIds.length===0 || editCarIds.findIndex(car.editCarIds)!==-1 )
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