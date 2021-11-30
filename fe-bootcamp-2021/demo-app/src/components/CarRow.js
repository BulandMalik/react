import PropTypes from 'prop-types';

export const CarRow = (props) => {
/*
    const carData = props.cars.map( car => {
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
*/

    return (
        <tr key={props.car.id}>
            <td>{props.car.id}</td>
            <td>{props.car.model}</td>
            <td>{props.car.make}</td>
            <td>{props.car.year}</td>
            <td>{props.car.color}</td>
            <td>{props.car.price}</td>
        </tr>
    );
};

CarRow.defaultProps = {
    car: {
        id: 0,
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0
    }
}

CarRow.propTypes = {
    car: PropTypes.object.isRequired,
}