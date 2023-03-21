export const getBooks = () => {
    return fetch("http://localhost:8000/books", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const createBook = (book) => {
    return fetch("http://localhost:8000/books", {
        method: "POST", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: book.title,
            author: book.author,
            description: book.description,
            reader: book.reader,
            age_range: book.age_range
        })
    })
}

export const getAgeRanges = () => {
    return fetch("http://localhost:8000/ageranges", { 
    headers:{
        "Authorization":`Token ${localStorage.getItem("lu_token")}`
    }
})
    .then((response => response.json()))
}

export const UpdateBook = (book, bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, {
        method: "PUT", 
        headers:{
            "Authorization":`Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(book)
    })
}

export const getSingleBook = (bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, {
        method: "GET",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const deleteBook = (bookId) => {
    return fetch(`http://localhost:8000/books/${bookId}`, 
    {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
}

