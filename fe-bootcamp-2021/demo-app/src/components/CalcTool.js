import { useState } from 'react';

import { useCalcToolStore } from '../hooks/useCalcToolStore';

import {
  ADD_ACTION, SUBTRACT_ACTION,
  MULTIPLY_ACTION, DIVIDE_ACTION,
  CLEAR_ACTION, DELETE_HISTORY_ENTRY_ACTION,
} from "../actions/calcToolActions";


export const CalcTool = () => {

  const {
    result, history, opCounts
    , errorMessage,
    add, subtract, multiply, divide,
    clear, deleteHistoryEntry } = useCalcToolStore();

  const [ numInput, setNumInput ] = useState(0);

  const doClear = () => {
    setNumInput(0);
    clear();
  }

  const junk = "<script>alert(0);</script>";

  return (


    <div>
      {junk}
      <section>
        Result: {result}
      </section>
      <form>
        {errorMessage && <div style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</div>}
        <label>
          Num: 
          <input type="number" value={numInput}
            onChange={({ target: { value } }) =>
              setNumInput(parseInt(value, 10))} />
        </label>
        <fieldset>
          <button type="button"
            onClick={() => add(numInput)}>+</button>
          <button type="button"
            onClick={() => subtract(numInput)}>-</button>
          <button type="button"
            onClick={() => multiply(numInput)}>*</button>
          <button type="button"
            onClick={() => divide(numInput)}>/</button>
          <button type="button"
            onClick={doClear}>C</button>
        </fieldset>
      </form>
      <ul>
        {history.map(entry => <li key={entry.id}>
          {entry.opName}: {entry.opValue}
          <button type="button" onClick={() => deleteHistoryEntry(entry.id)}>X</button>
        </li>)}
      </ul>
      <table>
        <thead>
          <tr>Op Name</tr>
          <tr>Op Count</tr>
        </thead>
        <tbody>
          <tr>
            <td>Add</td>
            <td>{opCounts[ADD_ACTION]}</td>
          </tr>
          <tr>
            <td>Subtract</td>
            <td>{opCounts[SUBTRACT_ACTION]}</td>
          </tr>
          <tr>
            <td>MULTIPLY</td>
            <td>{opCounts[MULTIPLY_ACTION]}</td>
          </tr>
          <tr>
            <td>Divide</td>
            <td>{opCounts[DIVIDE_ACTION]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

};