export const ColorTool = () => {

    //const colors = ['green', 'red'];
    const colors = [
        {id:1, name: 'red', hexcode:'ff0000'},
        {id:1, name: 'green', hexcode:'00ff00'},
        {id:1, name: 'blue', hexcode:'0000ff'},

    ];

    const colorListItem = colors.map( color => {
        return <li key={color.id}>{color.name}</li>;
    })

    return (
        <>
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colorListItem}
                <li>Green</li>
                <li>Red</li>
                <li>Purple</li>
                <li>Yellow</li>
                <li>Blue</li>
                <li>Orange</li>
            </ul>
        </>
    )
}