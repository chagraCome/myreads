import React from "react";
import { Component } from "react";
import Book from "./Book";
class BookShelf extends Component {
  render() {
    const { books, shelf, changeBookShelf} = this.props;
    const shelfname = shelf;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              if (book.shelf === shelfname) {
                return (
                  <li key={book.id}>
                    <Book bookInfo={book} changeBookShelf={changeBookShelf}/>
                  </li>
                );
              }
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
