import {render} from 'react-dom'; //curly braces because its a named import
import { App } from './components/App';

import './index.css';

render(
  <App />,
  document.querySelector(`#root`),
)