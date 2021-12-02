import { CarViewRow } from './CarViewRow';
import { CarEditRow } from './CarEditRow';

const tableHeaders=[
  ['Id','id'],
  ['Make','make'],
  ['Model','model'],
  ['Year','year'],
  ['Color','color'],
  ['Price','price'],
]
export const CarTable = props => {

  const sortByMake = (text) => {
    props.onSort(text);
  };

  const sortDirectionIndicator = (sortCol) => {
    if (sortCol === props.sortCol) {
      return props.sortDir === 'asc' ? ' v' : ' ^';
    }
    return '';
  };  

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map(([ header, field ]) => <th key={field}>
            <button type="button" onClick={() => props.onSort(field)}>
              {header}{sortDirectionIndicator(field)}
            </button>
          </th>)}          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map(car =>
          props.editCarId === car.id
            ? <CarEditRow key={car.id} car={car}
                onSaveCar={props.onSaveCar} onCancelCar={props.onCancelCar} />
            : <CarViewRow key={car.id} car={car}
                onEditCar={props.onEditCar} onDeleteCar={props.onDeleteCar} />)}
      </tbody>
    </table>

  );

};