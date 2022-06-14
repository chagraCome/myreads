import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";
import { Routes, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelve:['currentlyReading','wantToRead','read'],
    searchBools:[]
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }
  changeBookShelf=async (selectedbook,shelf)=>{
    await BooksAPI.update(selectedbook,shelf);
    await BooksAPI.getAll().then((books)=>{
       this.setState(()=>({
         books,
       }))
     })

 
  }

  render() {
   // console.log(this.state.books);
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<ListBooks books={this.state.books}  shelve={this.state.shelve}  changeBookShelf={this.changeBookShelf}/>} />
          <Route path="/search" element={<SearchPage changeBookShelf={this.changeBookShelf}/>} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
