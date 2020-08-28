import React, {createContext, useReducer, useEffect} from 'react'
import { BookReducer } from '../reducers/BookReducer'

export const BookContext = createContext()

export const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(BookReducer,[], () => {
        const localData = localStorage.getItem('books');
        return localData? JSON.parse(localData) : []
    })

    //useEffect runs when component render or re-render. Here we set specique data books chage effect and it shuld be placed in [].
    useEffect(() => {
        //Set Local Storage
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}


