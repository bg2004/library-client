import React, { useEffect, useState } from "react"
import { getBooks } from "../../managers/BookManager.js"

export const BookList = (props) => {
    const [ books, setBooks ] = useState([])

    useEffect(() => {
        getBooks().then(data => setBooks(data))
    }, [])

    return (
        <table className="books">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Shelf</th>
                    <th>Age Range</th>
                    <th>Date Added</th>
                    <th>User who Added</th>
                </tr>
            </thead>
            <tbody>
                {books.map(book => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.shelf}</td>
                        <td>{book.age_range.label}</td>
                        <td>{book.date_added}</td>
                        {/* <td>{book.self.user.first_name}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
