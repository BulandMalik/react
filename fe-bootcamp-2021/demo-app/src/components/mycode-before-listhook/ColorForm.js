import { useForm } from '../hooks/useForm';

export const ColorForm = (props) => {


    //useState is a fucntion call
    //passing parameters/arguments, passing an object
    //I am creating an object with 2 properties and passing to useState function
    //return an array and we are doing Array Destructuring

    const [colorForm, change, resetColorForm] = useForm({
        name: '',
        hexcode: ''
    });

    const submitColor = () => {

        props.onSubmitColor({ ...colorForm });

        //clear the form
        resetColorForm();        
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