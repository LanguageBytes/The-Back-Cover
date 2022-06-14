import React, {useState} from 'react';
import './style.css';
import axios from "axios"

// // Google Books API calls
// const getBooksByAuthor = 'https://www.googleapis.com/books/v1/volumes?q=prideandprejudice+intitle&key=AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84'

function BookSearch() {

const [book, setBook] = useState("");
const [result, setResult] = useState([]);
const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");


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
      <button data-bookTitle={book.id} data-bookCover={book.volumeInfo.imageLinks.thumbnail}> Favourite </button>
     </>
     )}
      </div>
  );
}




export default BookSearch