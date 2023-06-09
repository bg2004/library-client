import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook, UpdateBook, getAgeRanges } from "../../managers/BookManager.js";


export const BookList = (props, searchTermState) => {
  const [books, setBooks] = useState([]);
  const [selectedAgeRange, setSelectedAgeRange] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [ageRanges, setAgeRanges] = useState([]);
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

  const handleSelectAgeRange = (event) => {
    setSelectedAgeRange(event.target.value);
  };

  useEffect(() => {
    getAgeRanges().then((data) => {
      setAgeRanges(data);
    });
  }, []);
  



  const handleDelete = (id) => {
    

    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (confirmed) {
      const bookToDelete = books.find((book) => book.id === id);
      if (!bookToDelete) {
        alert("Book not found.");
        return;
      }
      if (bookToDelete.reader.id !== userId) {
        alert("You can only delete books you've added.");
        return;
      }
      deleteBook(id).then(() => {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
      });
    }
  };



  const handleSort = () => {
    if (sortOrder === "asc") {
      setSortOrder("desc");
      const sortedBooks = [...books].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      // Update addedByCurrentUser property for each book
      const updatedBooks = sortedBooks.map((book) => ({
        ...book,
        addedByCurrentUser: book.added_by === userId,
      }));
      setBooks(updatedBooks);
    } else {
      setSortOrder("asc");
      const sortedBooks = [...books].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      // Update addedByCurrentUser property for each book
      const updatedBooks = sortedBooks.map((book) => {
        console.log(book.added_by,userId)
        return ({

        ...book,
        addedByCurrentUser: book.added_by === userId,
      })});
      setBooks(updatedBooks);
    }
  };

  const filteredBooks = selectedAgeRange
    ? books
      .filter((book) => book.age_range.label === selectedAgeRange)
    : books
  // const handleAddToLibrary = (book) => {
  //   props.onAddToLibrary(book);
  // };

  return (

    <div>

      <Link to="/bookform">  <button>Create a Book</button></Link>
      <table className="books">
        <thead>
          <tr>
            <th>
              Title{" "}

              <button onClick={handleSort}>
                {sortOrder === "asc" ? "A-Z" : "Z-A"}
              </button>
            </th>
            <th>Author</th>
            <th>Age Range</th>
            <th>Action</th>
            <th>
              <select
                value={selectedAgeRange}
                onChange={event => handleSelectAgeRange(event)}
              >
                <option value="">Filter By Age Range</option>
                {ageRanges.map(ageRange => (
                  <option key={`ageRange--${ageRange.id}`} value={ageRange.label} name={ageRange.label}>{ageRange.label}</option>
                  
                ))}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book.id}>
              <td>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.age_range.label}</td>
              <td>
                {book.addedByCurrentUser ? (
                  <>
                    <Link to={`/editbook/${book.id}`}>edit</Link>
                    <button onClick={() => handleDelete(book.id)}>X</button>

                  </>
                ) : (
                  <></>
                )}
              </td>
              <td>

              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


