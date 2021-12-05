
export const CarTool = () => {

    const cars = [
        {id:1, make:'Toyota', model:'Sienna', year:2020, color:'Silver', price:'30,000'},
        {id:2, make:'Toyota', model:'Corola', year:2021, color:'Green', price:'35,000'},
        {id:3, make:'Toyota', model:'Sienna', year:2021, color:'Red', price:'32,000'},
    ]

    const carListItems = cars.map( car => {
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