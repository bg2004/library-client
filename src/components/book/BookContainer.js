import { useState } from "react"
import { BookList } from "./BookList.js"
import { BookSearch } from "./BookSearch.js"


export const BookContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <BookSearch setterFunction={setSearchTerms} />
        <BookList searchTermState={searchTerms}/>
    </>
}