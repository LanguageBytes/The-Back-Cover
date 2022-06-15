import React, {useState} from 'react';
import './style.css';
import axios from "axios"
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../../utils/mutations';


function BookSearch() {

const [book, setBook] = useState("");
const [buttonState, setButtonState] = useState({ bookCover: '' });
const [addBook] = useMutation(ADD_BOOK);
const [result, setResult] = useState([]);
const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");


// For the Favourite Button
const handleButtonClick= async (event) => {
  event.preventDefault();
  try {
  const mutationResponse = await addBook({
    variables: {
      bookCover: buttonState.bookcover,
    },
  });
    console.log(setButtonState)
    console.log(mutationResponse)

  } catch (err) {
    console.error(err);
  }
  
};
const handleChange = (event) => {
  const { name, value } = event.target;

  setButtonState({
    ...buttonState,
    [name]: value,
  });
  console.log(buttonState)
};

// For the API call
function changeHandler(event){

  const book = event.target.value;
  setBook(book);
}


function submitHandler(event){
  event.preventDefault();

  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&maxResult=10" + "&key=" + apiKey)
  .then(data =>  {
    console.log(data.data.items)
    setResult(data.data.items)
  })
}

  return (

   <div>
    <h1>Search Books</h1>
     <form onSubmit={submitHandler}>
       <div>
         <input type ="text" onChange={changeHandler} placeholder="Enter a book name" autoComplete="off"></input>;
       </div>
       <button type="submit"> Search
       </button>
     </form>

     {result.map(book =>
     <>
      <img src = {book.volumeInfo.imageLinks.thumbnail} alt ={book.title}/>
      <button name={book.volumeInfo.imageLinks.thumbnail} onClick={handleButtonClick} OnChange={handleChange} value={book.volumeInfo.imageLinks.thumbnail}> Favourite </button>
     </>
     )}
      </div> 
  );

     }




export default BookSearch