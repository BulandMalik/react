const ninjas = [
    {name: 'Buland', belt:'black'},
    {name: 'Ali', belt:'Blue'},
    {name: 'Qasim', belt:'Red'},
    {name: 'Shahzad', belt:'black'},
];

const blog = { title: 'new blog', author: 'Buland'} 

console.log(ninjas);
console.log(...ninjas); // Output ==> { name: 'Buland', belt: 'black' } { name: 'Ali', belt: 'Blue' } { name: 'Qasim', belt: 'Red' } { name: 'Shahzad', belt: 'black' }

const idBlog = { 
    ...blog,
    id: 1,
}

console.log(idBlog); //Output ==> { title: 'new blog', author: 'Buland', id: 1 }