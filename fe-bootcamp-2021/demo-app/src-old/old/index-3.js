import {render} from 'react-dom'; //curly braces because its a named import

import { HelloWorld } from './components/HelloWorld'


render(
  <HelloWorld />,
  document.querySelector(`#root`),
)

