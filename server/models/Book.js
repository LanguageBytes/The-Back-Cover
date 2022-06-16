const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const bookSchema = new Schema({
  bookCover: {
    type: String,
    required: true,
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Book = model('Book', bookSchema);

module.exports = Book;