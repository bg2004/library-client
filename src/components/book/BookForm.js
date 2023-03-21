import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createBook, getAgeRanges } from '../../managers/BookManager.js'


export const BookForm = () => {
    const navigate = useNavigate()
    const [ranges, setRanges] = useState([])

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
        const [currentBook, setCurrentBook] = useState({
            title: "",
            author: "",
            description: "",
            age_range: "",
            reader: ""
        })
        

    useEffect(() => {
        // Fetch the age ranges from your API and set the state
        getAgeRanges()
          .then(data => setRanges(data))
          .catch(error => console.error(error))
    }, [])
    

    const changeBookState = (domEvent) => {
        const { name, value } = domEvent.target
        setCurrentBook(prevBook => ({
            ...prevBook,
            [name]: value
        }))
    }

    return (
        <form className="bookForm">
            <h2 className="bookForm__title">Register New Book</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentBook.title}
                        onChange={changeBookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" required autoFocus className="form-control"
                        value={currentBook.author}
                        onChange={changeBookState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentBook.description}
                        onChange={changeBookState}
                    />
                </div>
            </fieldset>
        

            <fieldset>
                <div className="form-group">
                    <label className="label">Age Ranges: </label>
                    <select
                        name="age_range"
                        className="form-control"
                        value={currentBook.age_range}
                        onChange={(event) => {
                            const copy = { ...currentBook }
                            copy.age_range = parseInt(event.target.value)
                            setCurrentBook(copy)
                        }}>
                        <option value="0">Choose:</option>
                        {ranges.map(range => ( 
                            <option key={`range--${range.id}`} value={range.id} label={range.label}>{range.label}</option>                         
                        ))}
                    </select>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const book = {
                        Image: currentBook.book_image,
                        title: currentBook.title,
                        author: currentBook.author,
                        description: currentBook.description,
                        age_range: currentBook.age_range,
                        reader: currentBook.reader
                    }


                                    // Call the createBook function and pass in the book object
                createBook(book)
                .then(() => {
                    // Navigate to the book list page
                    navigate('/books') && navigate('/mybooks')
                })
                .catch(error => console.error(error))
        }}
        className="btn btn-primary">Create Book</button>
</form>
)

}
