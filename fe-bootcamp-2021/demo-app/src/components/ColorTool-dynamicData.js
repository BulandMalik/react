export const ColorTool = () => {

    //const colors = ['green', 'red'];
    const colors = [
        {id:1, name: 'Red', hexcode:'ff0000'},
        {id:2, name: 'Green', hexcode:'00ff00'},
        {id:3, name: 'Blue', hexcode:'0000ff'},

    ];

    const colorListItems = colors.map( color => {
        return <li key={color.id} script='text-color="red"'>{color.name}</li>;
    })

    console.log(colors);
    console.log(colorListItems);
/*
    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colorListItems}
            </ul>
        </>
    )
*/

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colors.map( color => {
                    <li key={color.id}>
                        {color.name}
                    </li>})
                }
            </ul>
        </>
    )
}