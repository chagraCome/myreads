import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";
import { Routes, Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    shelve:['currentlyReading','wantToRead','read']
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        books,
      }));
    });
  }

  render() {
    console.log(this.state.books);
    console.log(React.version);
    return (
      <div className="app">
        <Routes>
          <Route path="/" element={<ListBooks books={this.state.books}  shelve={this.state.shelve} />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
