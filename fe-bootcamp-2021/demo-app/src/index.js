import {render} from 'react-dom'; //curly braces because its a named import
import { App } from './components/App';
//import { CalcTool as App } from './components/CalcTool';

//import { Provider } from 'react-redux';
//import { calcToolStore } from './stores/calcToolStore';


import './index.css';

render(
  //<Provider store={calcToolStore}>
    <App />,
  //</Provider>,
  document.querySelector(`#root`),
)