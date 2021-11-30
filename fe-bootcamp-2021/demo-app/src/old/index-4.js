import {render} from 'react-dom'; //curly braces because its a named import

import { HelloWorld } from './components/HelloWorld'
import { CarTool } from './components/CarTool'

/*
render(
  //<HelloWorld />,
  <CarTool />,
  document.querySelector(`#root`),
)*/

render(
  <>
    <HelloWorld />
    <CarTool />
  </>,
  document.querySelector(`#root`),
)