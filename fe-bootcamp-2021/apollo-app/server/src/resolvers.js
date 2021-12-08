import fetch from 'node-fetch';

export const resolvers = {
  Query: {
    message() {
      return 'Welcome to React and Apollo!';
    },
    colors: () => (['red','green','blue']),
    quantity: () => 42,
    price: () => 2.34,
    person: () => ([
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Smith',
        age: 39
      },
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Wish',
        age: 29
      },
      {
        id: 1,
        firstName: 'Smith',
        lastName: 'Chal',
        age: 45
      }
    ]),
    authors: () => {
      return fetch('http://localhost:5050/authors')
        .then(res => res.json());
    },
    books: () => {
      return fetch('http://localhost:5050/books')
        .then(res => res.json());
    }
  },

  Mutation: {
    appendAuthor: (_, args) => {

      return fetch('http://localhost:5050/authors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(args.author),
      }).then(res => res.json());

    },
/*    appendAuthorAsync: async (_, {author} ) => { //obj destrcuturing

      const res = await fetch('http://localhost:5050/authors', {
        method: 'POST',
        headers: 'Content-Type: application/json',
        body: JSON.stringify(author),//args.author),
      });

      const resAuthor = await res.json();
      return resAuthor;
    }    */

    appendBook: (_, args) => {

      return fetch('http://localhost:5050/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(args.book),
      }).then(res => res.json());

    },    

    deleteBook: (_, args) => {

      return fetch(`http://localhost:5050/books/${args.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        //body: JSON.stringify(args.id),
      }).then(res => res.json());

    },    


    removeBook: async (_, args) => {

      const book = await fetch(`http://localhost:5050/books/${args.id}`).then(res => res.json() );
      await fetch(`http://localhost:5050/books/${args.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'},
        //body: JSON.stringify(args.id),
      });
      
      return book;//.then(res => res.json());

    },      
  }
};
