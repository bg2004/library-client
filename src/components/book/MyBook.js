import React, { useContext, useEffect, useState } from "react";
import { getBooks, deleteBook } from "../../managers/BookManager.js";


export const MyBook = (props) => {
  const [books, setBooks] = useState([]);
    return (
      <div>
        <h2>My Library</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        ) : (
          <p>No books in library</p>
        )}
      </div>
    );
  };
  
