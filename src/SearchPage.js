import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";
class SearchPage extends Component {
  state = {
    query: "",
    biblio:[]
  };
  searchbook = async(event) => {
    this.setState({
      query:event.target.value
    })
    console.log(this.state.query)
    await BooksAPI.search(this.state.query).then((biblio) => {
      this.setState(() => ({
   biblio,
      }));
    });
    console.log(this.state.biblio)
    }
  render() {
    const { query,biblio} = this.state;
    const { books, changeBookShelf} = this.props;
 
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
              onChange={this.searchbook}
            />
          </div>
        </div>
        <div className="search-books-results">
          <p>{this.query}</p>
          <ol className="books-grid">
            {this.state.biblio.map((book)=>{
               return (
                <li key={book.title}>
                  <Book bookInfo={book} changeBookShelf={changeBookShelf}/>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchPage;
