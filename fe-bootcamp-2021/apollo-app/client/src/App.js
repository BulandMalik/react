import { useQuery, gql , useMutation } from "@apollo/client";

import { AuthorList } from "./components/AuthorList";
import { BookTable } from "./components/BookTable";
import { AuthorForm } from "./components/AuthorForm";
import { BookForm } from "./components/BookForm";

const APP_QUERY = gql`
  query App {
    authors {
      id
      lastName
      firstName
    }
    books {
      id
      isbn
      authorId
      category
      price
      quantity      
    }
  }
`;

const APPEND_AUTHOR_MUTATION = gql`
mutation AppendAuthor($newAuthor: NewAuthor) {
  appendAuthor(author: $newAuthor) {
    id
    firstName
    lastName
    phoneNumber
  }
}
`;


const APPEND_BOOK_MUTATION = gql`
mutation AppendBook($newBook: NewBook) {
  appendBook(book: $newBook) {
    isbn
    authorId
    category
    price
    quantity
  }
}
`;

const DELETE_BOOK_MUTATION = gql`
mutation DeleteBook($id: ID!) {
  deleteBook(id: $id) {
    id
    isbn
    category
    price
    quantity
  }
}
`;

function App() {
  const { loading, error, data } = useQuery(APP_QUERY);
  const [ mutateAppendAuthor ] = useMutation(APPEND_AUTHOR_MUTATION);
  const [ mutateAppendBook ] = useMutation(APPEND_BOOK_MUTATION);
  const [ mutateDeleteBook ] = useMutation(DELETE_BOOK_MUTATION);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const addAuthor = (newAuthor) => {
    console.log(newAuthor);
    return mutateAppendAuthor({
      variables: {
        newAuthor,
      },
      refetchQueries: [ {query: APP_QUERY}],
    });
  }

  const addBook = (newBook) => {
    console.log(newBook);
    return mutateAppendBook({
      variables: {
        newBook,
      },
      refetchQueries: [ {query: APP_QUERY}],
    });
  }

  const deleteBook = (id) => {
    console.log(id);
    return mutateDeleteBook({
      variables: {
        id,
      },
      refetchQueries: [ {query: APP_QUERY}],
    });
  }
  
  return (
    <>
      <AuthorList authors={data.authors} />
      <AuthorForm buttonText="Add Author" onSubmitAuthor={addAuthor} />

      <BookTable books={data.books} onSubmitDelete={deleteBook}/>
      <BookForm buttonText="Add Book" onSubmitBook={addBook} />
    </>
  );
}

export default App;
