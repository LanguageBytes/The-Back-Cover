import React, {useState} from 'react';
import './style.css';
import axios from "axios"
import { Center, Container, FormControl } from '@chakra-ui/react'
import {Heading} from  '@chakra-ui/react'
import {Input} from  '@chakra-ui/react'
import {Button} from  '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../../utils/mutations';

function BookSearch() {
const [book, setBook] = useState("");
const [buttonState, setButtonState] = useState({ bookCover: ''});
const [addBook] = useMutation(ADD_BOOK);
const [result, setResult] = useState([]);
const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");

// For the API call
function changeHandler(event){

  const book = event.target.value;
  setBook(book);
}

function submitHandler(event){
  event.preventDefault();

  axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&filter=free-ebooks" + "&maxResult=40" + "&key=" + apiKey)
  .then(data =>  {
    console.log(data.data.items)
    setResult(data.data.items)
  })
}

// For the Favourite Button
const handleButtonClick= async (event) => {
  event.preventDefault();
  try {
  const mutationResponse = await addBook({
    data: {
      bookcover: buttonState.Data
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
      <GridItem w='100%' colSpan={1} >
    <img src = {book.volumeInfo.imageLinks.thumbnail} alt ={book.title}/>
    <p>{book.volumeInfo.imageLinks.description} </p>
      <a href={book.industryIdentifiers.infoLink}>
      <Button> 
      <button name={book.volumeInfo.imageLinks.thumbnail}> Download </button> </Button>
     </a>
   
      </GridItem>
     )}
     </GridItem>
     </Grid>
      </Container> 
  );

     }