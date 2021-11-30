### Destructuring
1. how to run it
    ```
    node index.js
    ```
2. Object Destructuring
    ```
    const person = {
        firstName: 'Buland',
        lastName: 'Malik',
        age: 41
    };

    //ordering does not matter while retriving as we grab them using object properties
    const {firstName, age, lastName} = person

    //create custom vars as ln & fn
    const {lastName:ln, firstName:fn} = person;
    ```
3. Array Destructuring
    ```
    const nums = [1,3,7,5,9]

    const [a,b,c] = nums; //order does matter

    console.log(a,b,c); // Output --> 1 3 7
    ```
4. Function Params with Destructuring
    ```
    const doSomething = ({name}) => {
        console.log("Name:",name); // Output --> Buland Malik
    };
    
    doSomething({name: 'Buland Malik', age:55})
    ```