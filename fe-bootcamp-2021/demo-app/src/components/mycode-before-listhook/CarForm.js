import { useState } from "react";

export const CarForm = (props) => {

    const [carForm, setCarForm] = useState({
        //model: props.car.make,
        model: '',
        make: '',
        year: 0,
        color: '',
        price: 0
    });

    //capture key press events
    const change = (e) => {
        setCarForm({

            ...carForm,
            //[e.target.name]: e.target.value
            [e.target.name]: e.target.value === 'number' ? parseInt(e.target.value,10) : e.target.value,
        });
    };

    //capture button click event
    const addCarOnSubmit = () => {

        props.onSubmitCar({ ...carForm });

        //clear Car Form
        setCarForm({
            model: '',
            make: '',
            year: 0,
            color: '',
            price: 0    
        })
    };    

    console.log(carForm);

    return (
            <form>
                <label>
                    Make:
                    <input type="text" name="make" value={carForm.make} onChange={change} />
                </label>
                <label>
                    Model:
                    <input type="text" name="model" value={carForm.model} onChange={change} />
                </label>
                <label>
                    Year:
                    <input type="text" name="year" value={carForm.year} onChange={change} />
                </label>
                <label>
                    Color:
                    <input type="text" name="color" value={carForm.color} onChange={change} />
                </label>
                <label>
                    Price:
                    <input type="text" name="price" value={carForm.price} onChange={change} />
                </label>     
                <button type="button" onClick={addCarOnSubmit}>{props.buttonText}</button>                                                           
            </form>
    );

};