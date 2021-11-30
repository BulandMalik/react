import { useState } from "react";
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import { ToolFooter } from './ToolFooter'

export const CarTool = (props) => {

    const [cars, setCars] = useState([...props.cars]);

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

    };

    return (
        <>
            <ToolHeader headerText="Car Tool" />
            
            <CarTable cars={cars} onDeleteClick={deleteCar} />

            <CarForm buttonText="Add Car" onSubmitCar={addCar}/>

            <ToolFooter footerText="Copyright 2021. A Cool Company, Inc."/>
        </>
    )
}