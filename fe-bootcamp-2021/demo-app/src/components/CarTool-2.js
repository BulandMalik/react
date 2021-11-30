
export const CarTool = () => {

    const cars = [
        {id:1, make:'Toyota', model:'Sienna', Year:2020, color:'Silver', price:'30,000'},
        {id:2, make:'Toyota', model:'Corola', Year:2021, color:'Green', price:'35,000'},
        {id:3, make:'Toyota', model:'Sienna', Year:2021, color:'Red', price:'32,000'},
    ]

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
                    <tr>
                        <td>00001</td>
                        <td>Toyota</td>
                        <td>Sienna</td>
                        <td>2020</td>
                        <td>Silver</td>
                        <td>$33,000</td>
                    </tr>
                    <tr>
                        <td>00002</td>
                        <td>Toyota</td>
                        <td>Corola</td>
                        <td>2021</td>
                        <td>Red</td>
                        <td>$35,000</td>
                    </tr>                    
                </tbody>
            </table>
        </>
    )
}