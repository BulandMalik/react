import {render} from 'react-dom'; //curly braces because its a named import

//create components (fucntional components)
//Function Declaration
function HelloWorld() {

}

//Function Expression
const HellowWorld2 = function() {

}

//Arrow Function
const HelloWorld3 = () => {

  // JSX, its not a string of html, its a function call, its not valid JS, no need to add jsx extention
  //bable converts it into valid js React.createElement('h1', null, 'Hello, World!');
  return <h1>Hello, World!</h1>; // JSX, its not a string of html, its a function call, its not valid JS

}


//Arrow Function
const HelloWorld4Divs = () => {

  return (
    <div>
      <h1>Hello, World!</h1>
      <span>Hello</span>;
    </div>
  )
}

//Arrow Function --- no extra divs
const HelloWorld4ReactFragments = () => {

  return (
    <>
      <h1>Hello, World!</h1>
      <span>Hello</span>;
    </>
  )
}

render(
  <HelloWorld3 />,
  document.querySelector(`#root`),
)

