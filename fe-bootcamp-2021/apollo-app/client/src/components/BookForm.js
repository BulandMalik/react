import { useForm } from '../hooks/useForm';

export const BookForm = (props) => {

  const [ bookForm, change, resetBookForm ] = useForm({
    isbn: '',
    authorId: -1,
    category: '',
    price: 0,
    quantity: 0
  });
  
  const submitBook = () => {
    props.onSubmitBook({ ...bookForm });
    resetBookForm();
  };

  const submitBookAsync = async () => {
    await props.onSubmitBook({ ...bookForm });
    resetBookForm();
  };


  return (
    <form>
      <label style={{display: 'block'}}>
        ISBN:
        <input type="text" name="isbn" value={bookForm.isbn} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
        Author Id:
        <input type="text" name="authorId" value={bookForm.authorId} onChange={change} />
      </label>
      <label style={{display: 'block'}}>
       Category:
        <input type="text" name="category" value={bookForm.category} onChange={change} />
      </label>   
      <label style={{display: 'block'}}>
       Price:
        <input type="number" name="price" value={bookForm.price} onChange={change} />
      </label> 
      <label style={{display: 'block'}}>
       Quantity:
        <input type="number" name="quantity" value={bookForm.quantity} onChange={change} />
      </label>                
      <button type="button" onClick={submitBook}>{props.buttonText}</button>
    </form>
  );


};