import { useState } from "react";
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter'

export const CarTool = (props) => {

    const [cars, setCars] = useState([...props.cars]);

    const [editCarId, setEditCarId ] = useState(-1);


    const deleteCar = (carId) => {
        /*
        console.log("car.id to be deleted ->",carId);
        const newCars = cars.filter(function(car, index, arr){ 
            console.log(car.id, " ----- ", carId);
            console.log( parseInt(car.id,10) !== parseInt(carId,10) )
            return parseInt(car.id,10) !== parseInt(carId,10);
        });
        console.log("newCars ->",newCars);*/
        /*setCars([

            //...cars.filter( car => (car.id === carId) )

            ...cars.filter(function(car, index, arr){ 
                console.log(car.id);
                return parseInt(car.id,10) !== parseInt(carId,10);
            })

        ]);*/

        setCars(

            cars.filter(function(car, index, arr){ 
                console.log(car.id);
                return parseInt(car.id,10) !== parseInt(carId,10);
            })

            /*
            [{
                id: 1,
                model: 'Toyota',
                make: 'Corolla',
                year: 1900,
                color: 'red',
                price: 2000
            }]*/
        );
        setEditCarId(-1);
    };

    const addCar = (newCar) => {

        //add new car
        setCars([
            ...cars,
            {
                ...newCar,
                id: Math.max( ...cars.map(c => c.id),0) +1,
            }
        ]);
        setEditCarId(-1);
    };

    const saveCar = (updatedCar) => {
        console.log("updateCar->",updatedCar);
        setCars([
            ...cars.map( car => 
                            (car.id === updatedCar.id)
                            ? updatedCar
                            : car ),
        ]);

        setEditCarId(-1);
    };

    const saveCarImmutableWay = (updatedCar) => {
        console.log("updateCar->",updatedCar);
        
        const newCars = [ ...cars ]; //copy the existing array

        const carIndex = newCars.findIndex( c => c.id === updatedCar.id);

        newCars[carIndex] = updatedCar;
        
        setCars(newCars);

        setEditCarId(-1);
    };    

    const cancelCar = () => {
        setEditCarId(-1);
    };

    const editCar = (carId) => {
        setEditCarId(carId);
    };  

    return (
        <>
            <ToolHeader headerText="Car Tool" />
            
            {/*<CarTable cars={cars} onDeleteClick={deleteCar} onSaveCar={saveCar}/>*/}

            <CarTable cars={cars} editCarId={editCarId}
                onEditCar={editCar} onDeleteClick={deleteCar}
                onSaveCar={saveCar} onCancelCar={cancelCar} />

            <CarForm buttonText="Add Car" onSubmitCar={addCar}/>

            <ToolFooter footerText="Copyright 2021. A Cool Company, Inc."/>
        </>
    )
}