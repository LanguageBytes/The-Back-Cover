const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema({
  bookcover: {
    type: String,
  }
});

const Book = model('Book', bookSchema);

module.exports = Book;