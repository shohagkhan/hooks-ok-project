import React, {createContext, useState} from 'react'

export const BookContext = createContext()

export const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: "Book A", author: "Author A", id: 0},
        {title: "Book B", author: "Author B", id: 1},
        {title: "Book C", author: "Author C", id: 2},
        {title: "Book D", author: "Author D", id: 3},
        {title: "Book E", author: "Author E", id: 4}
    ])
    const addBook = (title, author) => {
        setBooks([...books, {title: title, author: author, id: books.length}])
    }
    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id))
    }
    return (
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}
