import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { FormControl } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../../utils/mutations";


function BookSearch() {
  const [book, setBook] = useState("");
  const [addBook] = useMutation(ADD_BOOK);
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");

  // This will listen for a button click, first it will set the description in localStorage then relocate
  // The data can then be used on a different page
 function handleDescription(event) {
  event.preventDefault(); {

  // Each item to be set in separate local storage locations
  // Heading
    const Heading = event.target.getAttribute("data-heading")
    console.log(event.target.getAttribute("data-heading"))
    localStorage.setItem('Heading', Heading);
      console.log(event.target.getAttribute("data-heading"))

    // Description
    const Description = event.target.getAttribute("data-desc")
    console.log(event.target.getAttribute("data-desc"))
    localStorage.setItem('Description', Description);
      console.log(event.target.getAttribute("data-desc"))

    // Author
    const Author = event.target.getAttribute("data-author")
    console.log(event.target.getAttribute("data-author"))
    localStorage.setItem('Author', Author);
      console.log(event.target.getAttribute("data-author"))

    // Image
    const Image = event.target.getAttribute("data-image")
    console.log(event.target.getAttribute("data-image"))
    localStorage.setItem('Image', Image);
    console.log(event.target.getAttribute("data-image"))

    // Published
    const Published = event.target.getAttribute("data-published")
    console.log(event.target.getAttribute("data-published"))
    localStorage.setItem('Published', Published);
      console.log(event.target.getAttribute("data-published"))


    // Once this data is saved in storage to be retrieved, relocate the user to the Description page
      window.location.href = "/description";
    }; 
}

  // For the Favourite Button
  // Will take the data from that button and save it to our database
  const handleButtonClick = async (event) => {
    event.preventDefault();
    console.log(event.target.dataset);
    try {
      const mutationResponse = await addBook({
        variables: event.target.dataset,
      });
    } catch (err) {
      console.error(err);
    }
  };

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
          "&maxResult=10" +
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
        fontSize='6xl'
        fontWeight='normal'
        textAlign={'center'}
      >
        Discovery
      </Text>
      {/* <div> */}
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
              Search Books
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
                  <button 
                  className="info-button"
                  data-desc={book.volumeInfo.description}
                  data-heading={book.volumeInfo.title}
                  data-author={book.volumeInfo.authors}
                  data-image={book.volumeInfo.imageLinks.thumbnail}
                  data-published={book.volumeInfo.publishedDate}
                  onClick={handleDescription} value={book.volumeInfo.description}> Read More </button> 
                  <button
                     className = "book-button"
                     id="favourite"
                     onClick={handleButtonClick}
                     data-bookcover={book.volumeInfo.imageLinks.thumbnail}
                  > 
                  Favourite
                  </button>
      </GridItem>  
            ))}
           </Grid> 
        </GridItem>
      </Grid>
    </Box>
  )};

 export default BookSearch

