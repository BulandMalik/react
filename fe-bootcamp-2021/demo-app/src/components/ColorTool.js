import {useState} from "react";

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

    const change = e => {
        //console.log(e);
        setColorForm({ //new object in heap

            //object spread operator, copy colorForm properties into new object
            ...colorForm, 
            
            //computed property either name/hexcode
            [e.target.name]: e.target.value 
        });
    }

    //props.colors = []; //error
    console.log(Object.isFrozen(props));//is Frozen

    const colorListItems = props.colors.map( color => {
        return <li key={color.id} script='text-color="red"'>{color.name}</li>;
    })

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

            <form>
                <label>
                    Name: 
                    <input type="text" name="name" value={colorForm.name} onChange={change} />
                </label>
                <label>
                    Hexcode: 
                    <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
                </label>                
            </form>
        </>
    )
}