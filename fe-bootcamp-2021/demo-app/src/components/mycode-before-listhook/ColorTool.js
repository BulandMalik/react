import {useState} from "react";

import { ToolHeader } from './ToolHeader';
import { ColorList } from './ColorList';
import { ColorForm } from "./ColorForm";

export const ColorTool = (props) => {

    //worst line of code ever
    /*props.colors.push({
        id:4, name: 'purple', hexcode: 'ff00ff',
    });*/

    const [colors, setColors] = useState([...props.colors]);

    //props.colors = []; //error
    console.log(Object.isFrozen(props));//is Frozen

    const colorListItems = colors.map( color => {
        return <li key={color.id} script='text-color="red"'>{color.name}</li>;
    })

    const addColor = (newColor) => {
        setColors([
            ...colors,
            {
                ...newColor,
                //id: colors.length +1 //if you delete things, you will have duplicates
                id: Math.max(...colors.map(c => c.id), 0) +1,     
            }
        ]);

    };

    //console.log(props.colors);
    //console.log(colorListItems);
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
            <ToolHeader headerText="Color Tool" />
            <ColorList colors={colors} />
            <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
        </>
    )
}
