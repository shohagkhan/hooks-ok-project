import React, {useState, useContext} from 'react'
import { BookContext } from './../context/BookContextProvider';

export const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        addBook(title, author)
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/><br/>
            <input type="submit" value="Add Book"/>
        </form>
    )
}
