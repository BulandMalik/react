import {render} from 'react-dom'; //curly braces because its a named import

import { ColorTool } from './components/ColorTool'
import { CarTool } from './components/CarTool'

const colorList = [
  {id:1, name: 'Red', hexcode:'ff0000'},
  {id:2, name: 'Green', hexcode:'00ff00'},
  {id:3, name: 'Blue', hexcode:'0000ff'},

];

const carList = [
  {id:1, make:'Toyota', model:'Sienna', year:2020, color:'Silver', price:'30,000'},
  {id:2, make:'Toyota', model:'Corola', year:2021, color:'Green', price:'35,000'},
  {id:3, make:'Toyota', model:'Sienna', year:2021, color:'Red', price:'32,000'},
]



render(
  <>
    <ColorTool colors={colorList}/>
    <CarTool cars={carList}/>
  </>,
  document.querySelector(`#root`),
)