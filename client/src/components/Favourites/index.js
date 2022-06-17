import React from 'react';
import { Center, Grid, GridItem } from '@chakra-ui/react'
import "./style.css";
import {Text} from '@chakra-ui/react'


const Favourites = ({books}) => {
  if (!books.length) {
    return <h3>No books yet </h3>;
  }
  return (
    <div>
        <br/>
        <Text
        className="favourites-title"
        bg='#323d71'
        font-size="10px"
        bgClip='text'
        fontSize='6xl'
        fontWeight='normal'
        textAlign={'center'}
      >
        Saved Books
      </Text>

      <br/>
      <Grid templateColumns={{
        base: "repeat(2, 1fr)",
        sm:"repeat(3,1fr)",
        md: "repeat(4,1fr)",
        lg: "repeat(4,1fr)",
        xl: "repeat(5,1fr)",
      }}
      gap={{base: "2",
            sm:"3",
            md: "4",
           lg: "5",
            xl: "5",}}
    >
      {books &&
        books.map((books) => (
            <GridItem m='6' w="100%" colSpan={1}>
            <img className="favourite-image" src = {books.bookcover}/>
            </GridItem>
        ))}
    </Grid>
    </div>
    
  );
};
export default Favourites;