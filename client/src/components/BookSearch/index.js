import React, {useState} from 'react';
import './style.css';
import axios from "axios"
import Favourites from "../Favourites"
import { Center, Container, FormControl } from '@chakra-ui/react'
import {Heading} from  '@chakra-ui/react'
import {Input} from  '@chakra-ui/react'
import {Button} from  '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'

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

   <Container>
      <Grid h='200px'
            templateColumns='repeat(3, 1fr)'
            gap={4}>
    <GridItem colSpan={1}>
    <FormControl  p='4' my='4' boxShadow='dark-lg' className="discovery-form-background" >
    <Heading fontWeight="light" className="form-heading-discovery" py='2' fontSize='25px'>Search Books</Heading>
     <form onSubmit={submitHandler}>
         <Input bg='cyan.100' type ="text" onChange={changeHandler} placeholder="Enter a book name" autoComplete="off"></Input>
       <Button  variant='solid' mt='4' className="discovery-button" type="submit"> Search
       </Button>
     </form>
     </FormControl>
     </GridItem>
     <GridItem rowSpan={2} colSpan={2}>
     {result.map(book =>
     <Grid templateColumns="repeat(5, 1fr)" gap='2' >
      <Box w='100%' >
      <img src = {book.volumeInfo.imageLinks.thumbnail} alt ={book.title}/>
      <Button> 
      <button data-bookTitle={book.id} data-bookCover={book.volumeInfo.imageLinks.thumbnail}>Favourite</button> </Button>
      </Box>
     </Grid>
     )}
     </GridItem>
     </Grid>
      </Container> 
  );

     }




export default BookSearch