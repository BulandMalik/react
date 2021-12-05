
export const CarTool = (props) => {

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
    })
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
        </>
    )
}