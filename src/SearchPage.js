import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class SearchPage extends Component {
  state = {
    query: "",
    bibliot: [],
  };
  updateQuery = async (query) => {
    await this.setState(() => ({
      query: query.trim(),
    }));
    console.log("query now", query);
    this.searchbook(this.state.query);
  };
  searchbook = async (query) => {
    if (query.length > 0) {
      await BooksAPI.search(query).then((res) => {
        res.error
          ? this.setState(() => ({ bibliot: [] }))
          : this.setState(() => ({ bibliot: res }));
      });
    }
    console.log("biblio", this.state.bibliot);
  };

  render() {
    const { query, bibliot } = this.state;
    const { books, changeBookShelf } = this.props;
    const showcase = () => {
      if (query.length == 0) {
        return (
          <div>
            {" "}
            <p>
              {" "}
              to search for a book, please write one of the felllowing search
              term in input field
            </p>
            <p>
              'Android', 'Art', 'Artificial Intelligence', 'Astronomy',
              'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography',
              'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics',
              'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design',
              'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
              'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First',
              'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer',
              'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri',
              'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage',
              'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting',
              'Philosophy', 'Photography', 'Poetry', 'Production',
              'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling',
              'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
              'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual
              Reality', 'Web Development', 'iOS'
            </p>
          </div>
        );
      } else if (query.length > 0 && bibliot.length > 0) {
        return bibliot.map((book) => {
          books.map((b) => {
            if (b.id === book.id) {
              book.shelf = b.shelf;
            }
          });
          if (!book.shelf) {
            book.shelf = "none";
          }

          return (
            <li key={book.id}>
              <Book bookInfo={book} changeBookShelf={changeBookShelf} />
            </li>
          );
        });
      } else if (bibliot.length == 0 && query.length > 0) {
        return (
          <p>
            we don't have what you are looking for, please choose other term
          </p>
        );
      }
    };
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">{showcase()}</ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
