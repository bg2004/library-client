import React, { useContext, useEffect, useState } from "react";
import { getBooks, deleteBook } from "../../managers/BookManager.js";


export const MyBook = (props) => {
  const [books, setBooks] = useState([]);
  const userId = parseInt(localStorage.getItem("user_id"));

  useEffect(() => {
    getBooks().then((data) => {
      // Update addedByCurrentUser property for each book

      const updatedBooks = data.map((book) => ({
        ...book,
        addedByCurrentUser: book.reader.id === parseInt(userId),
      }));

      setBooks(updatedBooks);
    });
  }, [userId]);
  return (
    <div>


      <h2>My Library</h2>
      {books.length > 0 ? (
        <ul>
          {books.filter((book) => book.addedByCurrentUser).map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}

        </ul>
      ) : (
        <p>No books in library</p>
      )}
    </div>
  );

};

