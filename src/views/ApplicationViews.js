import { Route, Routes, Outlet } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { BookList } from "../components/book/BookList"
import { BookForm } from "../components/book/BookForm"
import { HomePageView } from "./HomePageView"
import { EditBook } from "../components/book/EditBook"
import { MyBook } from "../components/book/MyBook"
import { BookDetails } from "../components/book/BookDetails"

export const ApplicationViews = () => {
    return <>
        <Routes>

        <Route
        path="/"
        element={
          <>
            <HomePageView />

            <Outlet />
          </>
        }
      ></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                <Route path="/books" element={<BookList />} />
                <Route path="/mybooks" element={<MyBook />} />
                <Route path="books/:bookId" element={<BookDetails />} />
            </Route>
            <Route path="/bookform" element={<BookForm />} />
            <Route path="editbook/:bookId" element={<EditBook />} />
        </Routes>
    </>
}
