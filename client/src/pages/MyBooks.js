import React from "react";
import { useQuery } from '@apollo/client';
import Favourites from '../components/Favourites';
import { QUERY_BOOKS } from '../utils/queries';

const MyBooks = () => {

const { data } = useQuery(QUERY_BOOKS);
const books = data?.book || [];

    return (
      <div>
        <Favourites
          books={books}/>
    </div>
    );
  };
  
  export default MyBooks;