const isEmpty = arr => !Array.isArray(arr) || arr.length ===0;
const isEmpty_1 = (arr) => !Array.isArray(arr) || arr.length ===0;

export const ColorList = (props) => {

    /*
    return (
        <>
            <ul>
                {( !Array.isArray(props.colors) || props.colors.length ===0) 
                    ? <li>No Colors</li> 
                    : props.colors.map( color =>
                        <li key={color.id}>
                            {color.name} - {color.hexcode}
                        </li>)
                }
            </ul>        
        </>
    );*/

    return (
        <>
            <ul>
                { 
                    isEmpty(props.colors) 
                    ? <li>No Colors</li> 
                    : props.colors.map( color =>
                        <li key={color.id}>
                            {color.name} - {color.hexcode}
                        </li>)
                }
            </ul>        
        </>
    );    

};