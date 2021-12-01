## Spread Syntax
1. if its an array, it spreads array contents into seperate items
```
const ninjas = [
    {name: 'Buland', belt:'black'},
    {name: 'Ali', belt:'Blue'},
    {name: 'Qasim', belt:'Red'},
    {name: 'Shahzad', belt:'black'},
];

const blog = { title: 'new blog', author: 'Buland'} 

console.log(...ninjas);

// Output ==> { name: 'Buland', belt: 'black' } { name: 'Ali', belt: 'Blue' } { name: 'Qasim', belt: 'Red' } { name: 'Shahzad', belt: 'black' }
```
2. if its an object than it copy over all object properties and we can add/override properties
```
const blog = { title: 'new blog', author: 'Buland'} 

const idBlog = { 
    ...blog,
    id: 1,
}

console.log(idBlog);

//Output ==> { title: 'new blog', author: 'Buland', id: 1 }
```

## Template String
1. it uses backtiks to make sure we refer vars wuthin a string using ${} syntax.
```
const name = "Buland Malik";
const job = "developer";

const msg2 = `Hi, my name is ${name} and I am a ${job}`;
console.log("msg2:",msg2);

//Output ==> msg2: Hi, my name is Buland Malik and I am a developer
```

## Arrow Function
1. It is part of modetrn JS and released with ES6
2. can be stored inside a var and can be passed as a callback
3. lot of JS method uses it like map
```
    names.map( (name) => {name1: name});
```

### Fetch API & Promises
1. Fetch fetches contents from an endpoint liek Rest/Graphql endpoints
2. Fetch returns a promoise as it runs in a non blocking mode
3. Fetach response has a method calls json() that retunrs actual data. We can create chains like that using promises
4. A Promise tells that i will wait till i asm fullfilled with the task I asm undergoing.
5. [Free fake API for testing and prototyping](https://jsonplaceholder.typicode.com/)

### Async & Await
1. Async & Await go together
2. we can define async function and have them await for promise to be resolved and than return a response.
```
const getTodo = async () => {

    const todoRes1 =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("todoRes1:",todoRes1);
    //todoRes1 is a promise

    const todoRes = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("todoRes:",todoRes);
    //todoRes is a response and not a promise

    const data = await todoRes.json();
    console.log("data:",data);//data object    
}
```

### More Tutorials
1. [Framer Motion (React Animations)](https://www.youtube.com/watch?v=2V1WK-3HQNk&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i)

2. [React Skeleton Screen Tutorial](https://www.youtube.com/watch?v=cg_tmJBisp8&list=PL4cUxeGkcC9i6bZhMuAzQpC6YgLmB4k4-)

3. [Material UI for React](https://www.youtube.com/watch?v=0KEpWHtG10M&list=PL4cUxeGkcC9gjxLvV4VEkZ6H6H4yWuS58)

3. [React Testing Library](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)

4. [Strapi with React Tutorial](https://www.youtube.com/watch?v=4Ntd414raYc&list=PL4cUxeGkcC9h6OY8_8Oq6JerWqsKdAPxn)

5. [Next.js Crash Course](https://www.youtube.com/watch?v=A63UxsQsEbU&list=PL4cUxeGkcC9g9gP2onazU5-2M-AzA8eBw)

6. [Next.js with Contentful CMS](https://www.youtube.com/watch?v=m9mNsYJbkNg&list=PL4cUxeGkcC9jClk8wl1yJcN3Zlrr8YSA1)

7. [Next.js with Netlify Identity (auth)](https://www.youtube.com/watch?v=IM7a6BxNof8&list=PL4cUxeGkcC9ig-veuRaLI4QB0Ws8xMzjv)

8. [Node.js Crash Course](https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU)