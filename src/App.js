import React from 'react';
import './App.css';
import { BookContextProvider } from './context/BookContextProvider';
import { Navbar } from './components/Navbar';
import { BookList } from './components/BookList';
import { BookForm } from './components/BookForm';


const App = () => {
  return (
    <BookContextProvider>
      <Navbar/>
      <BookList/>
      <BookForm/>
    </BookContextProvider>
  )
}

export default App
