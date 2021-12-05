import { useForm } from "../hooks/useForm";

export const CarEditRow = (props) => {

    const [carEditRow, change] = useForm({
        ...props.car
    });

    //capture button click event
    const saveCar = () => {

        props.onSaveCar({ ...carEditRow });

        //props.onSaveCar({ ...carEditRow , id: props.car.id});

    };    

    const cancelEditCar = () => {
        props.onCancelEditCar();
    };

    console.log("carEditRow-->",carEditRow);

    return (
        <tr key={props.car.id}>
            <td>{props.car.id}</td>
            <td><input type="text" name="make" value={carEditRow.make} onChange={change} /></td>
            <td><input type="text" name="model" value={carEditRow.model} onChange={change} /></td>
            <td><input type="text" name="year" value={carEditRow.year} onChange={change} /></td>
            <td><input type="text" name="color" value={carEditRow.color} onChange={change} /></td>
            <td><input type="text" name="price" value={carEditRow.price} onChange={change} /></td>
            <td colSpan="2">
                <button type="button" onClick={saveCar}>Save</button>
                <button type="button" onClick={cancelEditCar}>Cancel</button>
            </td>
        </tr>
    );

};