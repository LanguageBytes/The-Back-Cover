import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { FormControl } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function EBooksSearch() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");

  // For the API call
  // Will take the user input to then render tailored results to the page

  function changeHandler(event) {
    const book = event.target.value;
    console.log(event.target.value)
    setBook(book);
  }
  function submitHandler(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&filter=free-ebooks" +
          "&maxResult=40" +
          "&key=" +
          apiKey
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }



  return (
    <Box className="book-container">
      <Text 
        className="favourites-title"
        bg='#323d71'
        bgClip='text'
        fontSize='4xl'
        fontWeight='normal'
        textAlign={'center'}
      >
        Search Free E-books
      </Text>
      <Grid templateColumns='repeat(6, 1fr)' gap={2} className="grid-books">
        <GridItem colSpan={{ base: "4", sm:"5", md: "6", lg: "2" }}>
          <FormControl
            p={{ base: "2", md: "4", lg: "4" }}
            my="4"
            boxShadow="dark-lg"
            className="discovery-form-background"
          >
            <Heading
              fontWeight="light"
              className="form-heading-discovery"
              py="2"
              fontSize="25px"
            >
              Search Free Books
            </Heading>
            <form onSubmit={submitHandler}>
              <Input
                bg="cyan.100"
                type="text"
                onChange={changeHandler}
                placeholder="Enter a book name"
                autoComplete="off"
              ></Input>
              <button
                className="discovery-button"
                type="submit"
              >
                {" "}
               <span>Search</span>
              </button>
            </form>
          </FormControl>

        </GridItem>
        <GridItem colSpan={{ base:"4" ,sm: "5", md: "6", lg: "4"}} >
           <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              sm:"repeat(3,1fr)",
              md: "repeat(4,1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(4,1fr)",
            }}
            gap={{base: "2",
                  sm:"3",
                  md: "4",
                 lg: "5",
                  xl: "5",}} 
          >
            {result.filter((book)=>
             typeof book.volumeInfo.imageLinks !== "undefined").map((book) => (
            <GridItem className="search-grid" w="100%" colSpan={1}>
                <img
                  className="book-cover"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
      </GridItem>  
            ))}
           </Grid> 
        </GridItem>
      </Grid>
    </Box>
  )};

export default EBooksSearch