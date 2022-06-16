import React from 'react';

const Favourites = ({books}) => {
  if (!books.length) {
    return <h3>No books Yet</h3>;
  }
  return (
    <div>
      {books &&
        books.map((books) => (
            <img src = {books.bookcover}/>
        ))}
    </div>
  );
};

export default Favourites;
  