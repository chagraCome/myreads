import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class SearchPage extends Component {
  state = {
    query: "",
  };
  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };
  render() {
    const { query } = this.state;
    const { books } = this.props;
    const searchbook = (query) => {
      let targetbook = BooksAPI.search(query);
      console.log("Hi Asma");
      console.log("search bbok", targetbook);
      /*  if(targetbook){
        targetbook.map(book=>{
          const bookonShelf = books.find((b)=>{b.id==book.id})
          if (bookonShelf) {
            book.shelf = bookonShelf.shelf
          }
          return <Book bookInfo={book} ></Book>
        })
      }*/
    }
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
          <p>{this.query}</p>
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
