import {useState} from "react";

export const ColorForm = (props) => {


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
            //[e.target.name]: e.target.value 
            [e.target.name]: e.target.value === 'number' ? parseInt(e.target.value, 10) : e.target.value,
        });
    }

    const submitColor = () => {

        props.onSubmitColor({ ...colorForm });

        //clear the form
        setColorForm({
            name: '', hexcode: ''
        });        
    }

    console.log(colorForm);

    return (
        <form>
            <label>
                Name: 
                <input type="text" name="name" value={colorForm.name} onChange={change} />
            </label>
            <label>
                Hexcode: 
                <input type="text" name="hexcode" value={colorForm.hexcode} onChange={change} />
            </label>     
            <button type="button" onClick={submitColor}>{props.buttonText}</button>           
        </form>
    );

};