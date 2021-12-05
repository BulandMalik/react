import './App.css';
import { useState} from "react";

import { connect } from 'react-redux';

function App( props ) {
  console.log("props = ", props);

  const [ numInput, setNumInput] = useState(0);

  return (
    <div className="App">
      <h1>Redux Hello World!</h1>
      <h3>State value from props: {props.stateValue}</h3>
      <form>
        <input type="text" value={numInput}
                        onChange={ ({target: {value}}) =>
                            setNumInput(parseInt(value,10))} />
        <button type="button" onClick={ () => props.add(numInput)}>Add</button>
        <button type="button" onClick={ () => props.mul(numInput)}>Mul</button>
      </form>
    </div>
  );
}

const mapStatToProps = state => {
  console.log("inside mapStatToProps");
  return {
    stateValue: state,
  };
};

const mapDispatchToProps = dispatch => {
  console.log("inside mapDispatchToProps");
  return {
    add : (value) => dispatch( {type: 'ADD', payload: value  } ),
    mul : (value) => dispatch( {type: 'MUL', payload: value  } )
  }
};

export default (connect)(mapStatToProps, mapDispatchToProps)(App);
