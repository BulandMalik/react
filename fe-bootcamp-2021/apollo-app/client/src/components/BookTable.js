

export const BookTable = (props) => {
    console.log(props.books);

    const deleteBook = (bookid) => {
        props.onSubmitDelete(bookid);
      };
    
    
    return (
        <table border="1">
            <thead>
                <tr>
                    <td>Id</td>
                    <td>ISBN</td>
                    <td>Author Id</td>
                    <td>category</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Actions</td>
                </tr>                                                
            </thead>
            <tbody>
                {
                    props.books.map( book => 
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td>{book.isbn}</td>
                        <td>{book.authorId}</td>
                        <td>{book.category}</td>
                        <td>{book.price}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button type="button" onClick={() => deleteBook(book.id)}>Delete</button>
                        </td>
                    </tr>)
                }
            </tbody>
        </table>
    );
}