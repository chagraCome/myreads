import React from "react";
import { Component } from "react";
import Book from "./Book";
class BookShelf extends Component {
  render() {
    const { books, shelf } = this.props;
    const shelfname = shelf;
    console.log(shelf);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => {
              console.log(shelfname);
              if (book.shelf == shelfname) {
                return (
                  <li key={book.title}>
                    <Book bookInfo={book} />
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
