import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBook } from "../../managers/BookManager.js";

export const BookDetails = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

  const SingleBook = async () => {
    try {
      const data = await getSingleBook(bookId);
      setBook(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    SingleBook(bookId);
  }, [bookId]);
  

  return (
    <div className="card">
      {book.title ? (
        <div>
          <h2>{book.title}</h2>
          <p className="author">By {book.author}</p>
          <p className="description">{book.description}</p>
          <p className="age-range">Age Range: {book.age_range.label}</p>
        </div>
      ) : (
        <div>Book not found</div>
      )}
    </div>
  );
      }  