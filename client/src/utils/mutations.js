import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;


 export const ADD_BOOK = gql` 
 mutation 
 addBook ( $bookTitle: String! $bookCover: String!) {
  addBook ( bookTitle: $bookTitle bookCover: $bookCover )
 }
 `;

 export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

