import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { Center, Container, FormControl } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex, Spacer } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_BOOK } from "../../utils/mutations";
import { Image } from "@chakra-ui/react";
import { BsSuitHeart } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";
function BookSearch() {
  const [book, setBook] = useState("");
  const [addBook] = useMutation(ADD_BOOK);
  const [result, setResult] = useState([]);
  const [apiKey] = useState("AIzaSyDgmjmghFQvvxLztdDeOKE0eqkG_HgdV84");
  // For the Favourite Button
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
  function changeHandler(event) {
    const book = event.target.value;
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
    <Box py={{ base: "0", md: "4", lg: "6" }}>
      <Heading
        fontSize="30px "
        p="4"
        fontWeight="normal"
        className="discovery-title"
      >
        Discovery
      </Heading>
      <Grid h="200px" templateColumns="repeat(8, 1fr)" gap={6}>
        <GridItem colSpan={{ base: "8", md: "8", lg: "5" }}>
          <FormControl
            p={{ base: "4", md: "4", lg: "10" }}
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
              <Button
                variant="solid"
                mt="4"
                className="discovery-button"
                type="submit"
              >
                {" "}
                Search
              </Button>
            </form>
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ base: "8", md: "8", lg: "3" }}>
          <Grid
            templateColumns={{
              base: "repeat(5, 1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(4,1fr)",
              xl: "repeat(5,1fr)",
            }}
            gap={2}
          >
            {result.filter((book)=>
             typeof book.volumeInfo.imageLinks !== "undefined").map((book) => (
              <GridItem w="100%" colSpan={1}>
                <img
                  className="book-cover"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.title}
                />
                  <button
                     id="favourite"
                     onClick={handleButtonClick}
                     data-bookcover={book.volumeInfo.imageLinks.thumbnail}
                  > Favourite </button>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  )};

 export default BookSearch

