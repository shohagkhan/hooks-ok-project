import React, {useContext} from 'react'
import { BookContext } from './../context/BookContext';
import { BookDetails } from './BookDetails';

export const BookList = () => {
    const {books} = useContext(BookContext)
    return  books.length? (
        <div>{books.map((book) => {
            return (
                <BookDetails book={book} key={book.id}/>
            )
        })}</div>
    ) : (
        <div><h3>There is no book to read...</h3></div>
    )
}
