export const ColorTool = (props) => {

    //worst line of code ever
    /*props.colors.push({
        id:4, name: 'purple', hexcode: 'ff00ff',
    });*/


    //props.colors = []; //error
    console.log(Object.isFrozen(props));//is Frozen

    const colorListItems = props.colors.map( color => {
        return <li key={color.id} script='text-color="red"'>{color.name}</li>;
    })

    console.log(props.colors);
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
                {props.colors.map( color =>
                    <li key={color.id}>
                        {color.name}
                    </li>)
                }
            </ul>
        </>
    )
}