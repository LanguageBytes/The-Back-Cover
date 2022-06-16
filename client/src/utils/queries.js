import { gql } from '@apollo/client';


export const QUERY_BOOKS = gql`
query getBooks{
  books {
    _id
    bookcover
  }
}
`
;