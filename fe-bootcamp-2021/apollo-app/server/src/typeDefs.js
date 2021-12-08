import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    message: String
    colors: [String]
    quantity: Int
    price: Float
    person: [Person]
    authors: [Author]
    books: [Book]
  }

  type Person {
    id: ID
    firstName: String
    lastName: String
    age: Int
  }

  type Author {
    id: ID
    firstName: String
    lastName: String
    phoneNumber: String
  }

  type Book {
    id: ID
    isbn: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }

  type Mutation {
    appendAuthor(author: NewAuthor): Author
    appendBook(book: NewBook): Book
    deleteBook(id: ID!): Book
    removeBook(id: ID): Book
  }

  input NewAuthor {
    firstName: String
    lastName: String
    phoneNumber: String
  }
  
  input NewBook {
    isbn: String
    authorId: ID
    category: String
    price: Float
    quantity: Int
  }

`;
