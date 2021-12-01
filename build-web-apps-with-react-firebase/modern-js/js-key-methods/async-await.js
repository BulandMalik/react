const getTodo = async () => {

    const todoRes1 =  fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("todoRes1:",todoRes1); //todoRes is a promise

    const todoRes = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log("todoRes:",todoRes); //todoRes is a response and not a promise

    const data = await todoRes.json();
    console.log("data:",data);//data object
}

getTodo();