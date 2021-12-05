import { useState } from 'react';

import {useCalcToolStore} from '../hooks/useCalcToolStore';

export const CalcTool = () => {

    const {result, history, add, subtract, multiply, divide, clear, deleteMe} =  useCalcToolStore();

    const [numInput, setNumInput] = useState(0);

    const doClear = () => {
        setNumInput(0);
        clear();
      }
    
    const doDelete = (id) => {
        console.log(id);
        deleteMe(id);
    };

    const divideIt = (numInput) => {
        console.log(numInput);
        if ( parseInt(numInput,10) === 0 ) {
            console.log("You cannot divide by 0");
            return; //alert("You cannot divide by 0");
        }

        divide(numInput);
    };    

    return (
        <div>
            <section>
                Result: {result}
            </section>
            <form>
                <label>
                    Number:
                    <input type="text" value={numInput}
                        onChange={ ({target: {value}}) =>
                            setNumInput(parseInt(value,10))} />
                </label>
                <fieldset>
                    <button type="button" 
                        onClick={() => add(numInput)}>+</button>
                    <button type="button" 
                        onClick={() => subtract(numInput)}>-</button>
                    <button type="button" 
                        onClick={() => multiply(numInput)}>*</button>
                    <button type="button" 
                        onClick={() => divideIt(numInput)}>/</button>
                    <button type="button" 
                        onClick={() => doClear()}>clear</button>                        
                </fieldset>
            </form>
            <ul>
                {history.map(entry => {
                    return (
                        <li key={entry.id}>{entry.opName} 
                            {entry.opValue}
                            <button type="button" onClick={() => {doDelete(entry.id)}}>Delete</button>
                        </li>
                    )}
                    )}
            </ul>
        </div>
    );
};