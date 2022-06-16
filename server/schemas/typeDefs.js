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
    bookcover: String!
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
    addBook (bookcover: String!): Book
    me: User
  }
type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook (bookcover: String!): Book
    addComment(
        bookId: ID!
        commentText: String!
        commentAuthor: String!
      ): Book
      removeBook(bookId: ID!): Book
      removeComment(bookId: ID!, commentId: ID!): Book
}`
module.exports = typeDefs;