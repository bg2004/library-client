import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { BookList } from "../components/book/BookList"
import { BookForm } from "../components/book/BookForm"

export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/books" element={<BookList />} />
            </Route>
            <Route path="/bookform" element={<BookForm />} />
        </Routes>
    </>
}
