const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID
    userName: String
    email: String
    password: String
    books: [Book]!
  }

type Book {
    _id: ID
    bookText: String
    bookAuthor: String!
    createdAt: String
    comments: [Comment]!
}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    users: [User]
    user(userName: String!): User
    books(userName: String): [Book]
    book(bookId: ID!): Book
    me: User
  }

type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook (bookText: String!, bookAuthor: String!): Book
    addComment(
        bookId: ID!
        commentText: String!
        commentAuthor: String!
      ): Book
      removeBook(bookId: ID!): Book
      removeComment(bookId: ID!, commentId: ID!): Book
    
}`

module.exports = typeDefs;