//const todo = fetch('https://jsonplaceholder.typicode.com/todos/1')
//Output ==> todo is a promise

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( (res) => { //callback fucntion
        console.log( "res:", res );
    });

/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) //returns res data
    .then(json => console.log(json)); //callback function
*/

const todo = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then( (res) => res.json()) //returns res data
    .then( (data) => { //callback function
        console.log( "data:", data );
    });

console.log("todo:",todo); //todo is a promise that will bve fullfilled later

