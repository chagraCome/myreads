import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import ListBooks from "./ListBooks";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
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
          <Route path="/" element={<ListBooks />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    );
  }
}

export default BooksApp;
