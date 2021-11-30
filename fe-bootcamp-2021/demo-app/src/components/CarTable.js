import { CarRow } from './CarRow';
import PropTypes from 'prop-types';

export const CarTable = (props) => {

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
                    </tr>
                </thead>
                <tbody>
                    {props.cars.map( car => <CarRow key={car.id} car={car} /> )}
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