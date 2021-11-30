import { useState } from "react";

export const CarTool = (props) => {

    const [carForm, setCarForm] = useState({
        model: '',
        make: '',
        year: 0,
        color: '',
        price: 0
    });

    const change = (e) => {

        setCarForm({

            ...carForm,

            [e.target.name]: e.target.value
        });
    };

    const carListItems = props.cars.map( car => {
        return (
            <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.model}</td>
                <td>{car.make}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{car.price}</td>
            </tr>
        )
    });

    console.log(carForm);

    return (
        <>
            <header>
                <h1>Car Tool</h1>
            </header>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {carListItems}                 
                </tbody>
            </table>

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
            </form>
        </>
    )
}