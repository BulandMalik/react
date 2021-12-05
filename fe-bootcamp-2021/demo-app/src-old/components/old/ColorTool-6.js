import {useState} from "react";

import { ToolHeader } from './ToolsHeader';

export const ColorTool = (props) => {

    //worst line of code ever
    /*props.colors.push({
        id:4, name: 'purple', hexcode: 'ff00ff',
    });*/

    //useState is a fucntion call
    //passing parameters/arguments, passing an object
    //I am creating an object with 2 properties and passing to useState function
    //return an array and we are doing Array Destructuring
    const [colorForm, setColorForm] = useState({
        name: '',
        hexcode: ''
    });

    const [colors, setColors] = useState([...props.colors]);

    const change = e => {
        //console.log(e);
        setColorForm({ //new object in heap

            //object spread operator, copy colorForm properties into new object
            ...colorForm, 
            
            //computed property either name/hexcode
            //[e.target.name]: e.target.value 
            [e.target.name]: e.target.value === 'number' ? parseInt(e.target.value, 10) : e.target.value,
        });
    }

    //props.colors = []; //error
    console.log(Object.isFrozen(props));//is Frozen

    const colorListItems = colors.map( color => {
        return <li key={color.id} script='text-color="red"'>{color.name}</li>;
    })

    const addColor = () => {
        setColors([
            ...colors,
            {
                ...colorForm,
                //id: colors.length +1 //if you delete things, you will have duplicates
                id: Math.max(...colors.map(c => c.id), 0) +1,     
            }
        ]);

        //clear the form
        setColorForm({
            name: '', hexcode: ''
        });
    };

    //console.log(props.colors);
    //console.log(colorListItems);
    console.log(colorForm);
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
            <header>
                <h1>Color Tool</h1>
            </header>
            <ul>
                {colors.map( color =>
                    <li key={color.id}>
                        {color.name}
                    </li>)
                }
            </ul>

            <form>
                <label>
                    Name: 
                    <input type="text" name="name" value={colorForm.name} onChange={change} />
                </label>
                <label>
                    Hexcode: 
                    <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
                </label>     
                <button type="button" onClick={addColor}>Add Color</button>           
            </form>
        </>
    )
}