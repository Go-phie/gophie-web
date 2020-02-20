import React, { Component } from "react";
import Movie from "./components/movie.js";
import "./css/App.css";
import "./css/loader.css";
import axios from "axios";
import {SearchIcon, RetryIcon} from "./components/icons.js";
import SkeletonLoader from "./components/SkeletonLoader.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      movieLink: "https://gophie.herokuapp.com/",
      movies: [],
      listIndex: 1,
      isLoading: false,
      hasMore: true,
      error: false
    };

    window.onscroll = () => {
      const { isLoading, hasMore, error } = this.state;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (isLoading || !hasMore || error) return;

      // Checks that the page has scrolled to the bottom
      if (
        (window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight) && (this.state.searchValue === "")
      ) {
        this.performList();
      }
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.performList = this.performList.bind(this);
    this.performSearch = this.performSearch.bind(this)
    this.checkKey = this.checkKey.bind(this);
    this.newSearch = this.newSearch.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
  }


  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  newSearch() {
    this.setState({
      movies: [],
      error: false
    });
    this.performSearch();
  }

  checkKey(e) {
    // eslint-disable-next-line
    if (e.charCode != 13) return;
    this.setState({
      movies: []
    });
    this.performSearch();
  }
  
  performSearch(){
    this.setState({
      isLoading: true,
      error: false
    });
    axios.get(this.state.movieLink + '?search=' + this.state.searchValue.replace(' ', '+'))
      .then(res => {
        console.log(res)
        this.setState({
          movies: res.data,
          isLoading: false
        })
      })
      .catch(err => {
        this.setState({
          error: true
        });
        alert(err);
      })
  }
  
  performList() {
    this.setState({
      isLoading: true,
      error: false
    });
    axios.get(
        `${this.state.movieLink}?list=${this.state.listIndex}`
      )
      .then(res => {
        console.log(this.state.listIndex)
        const movies = res.data
        let newIndex = this.state.listIndex;
        let newmovies = movies.map((element, index) => {
          element.Index = element.Index + ((newIndex -1) * 14)
          return element
        })
        console.log(newmovies)
        newIndex += 1;
        this.setState({
          isLoading: false,
          movies: [...this.state.movies, ...newmovies],
          listIndex: newIndex
          });
      })
      .catch(err => {
        this.setState({
          error: true
        });
        alert(err);
      });
  }

  tryAgain(){
    if(this.state.searchValue.length > 1){
      this.performSearch();
    } else {
      this.performList();
    }
  }

  componentDidMount () {
    this.performList();
  }

  //new search was removed from the button

  render() {
    return (
      <div className="App">
        <div className="header">

          <div className="header-left">
            <p>Gophie</p>
          </div>

          <div className="header-center">
            <input
                type="text"
                className="form-control"
                placeholder="Search for a movie..."
                autoFocus={true}
                onKeyPress={this.checkKey}
                onChange={this.handleSearchChange}
              />
          </div>

          <div className="header-right">
            <button onClick={this.newSearch} className="search-btn"> 
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className="movies">
          {
            this.state.movies.map((element, index) => {
              return (
                <Movie
                  key={element.Index}
                  data={element}
                />
              );
            })
          }
          {
            this.state.isLoading && !this.state.error && (
              <div className="skeleton-movies">
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
                <SkeletonLoader />
              </div>
            )
          }
          {
            this.state.error && (
              <div className="error">
                <p className="error-text">Oops..An Unknown Error Occured</p>
                <button className="error-retry-btn" onClick={this.tryAgain}>
                  <RetryIcon />
                  Try Again
                </button>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
