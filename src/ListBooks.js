import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
class ListBooks extends Component {
  render() {
    const { books, shelve } = this.props;
    console.log(" shelve", shelve);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelve.map((shelf) => {
              console.log(" shelve", shelf);
              return <BookShelf books={books} shelf={shelf}></BookShelf>;
            })}
          </div>
        </div>

        <Link to="/search">
          <div className="open-search">
            <button>Add a book</button>
          </div>
        </Link>
      </div>
    );
  }
}
export default ListBooks;
