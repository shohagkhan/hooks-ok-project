import React, {useContext} from 'react'
import { BookContext } from './../context/BookContextProvider';


export const Navbar = () => {
    const {books} = useContext(BookContext)
    return (
        <div>
            <h1>List of Books</h1>
            <h3>Total {books.length} Boooks are availabil to read...</h3>
        </div>
    )
}
