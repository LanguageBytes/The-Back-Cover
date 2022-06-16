import React from 'react';

const Favourites = ({books}) => {
  if (!books.length) {
    return <h3>No books Yet</h3>;
  }
  return (
    <div>
      <h3>My Books</h3>
      {books &&
        books.map((books) => (
            <img src = {books.bookcover}/>
        ))}
    </div>
  );
};

export default Favourites;
  