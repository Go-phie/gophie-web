import React, { Component } from "react";
import Movie from "./components/movie.js";
import "./css/App.css";
import "./css/loader.css";
import axios from "axios";

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
      const {
        state: { isLoading, hasMore, error }
      } = this;

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
  }


  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }
  newSearch() {
    this.setState({
      movies: []
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
  performSearch(){}
  performList() {
    this.setState({
      isLoading: true
    });
    axios.get(
        `${this.state.movieLink}?list=${this.state.listIndex}`
      )
      .then(res => {
        console.log(this.state.listIndex)
        const movies = res.data
        let newIndex = this.state.listIndex;
        newIndex += 1;
        this.setState({
          isLoading: false,
          movies: [...this.state.movies, ...movies],
          listIndex: newIndex
          });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      console.log(err)
      });
  }

  componentDidMount () {
    this.performList();
  }
  render() {
    return (
      <div className="App">
        <div className="search">
          <input
            type="text"
            placeholder="Find a movie"
            name=""
            id=""
            onKeyPress={this.checkKey}
            onChange={this.handleSearchChange}
          />{" "}
          <button onClick={this.newSearch}> Search </button>{" "}
        </div>{" "}
        <div className="movies">
          {" "}
          {this.state.movies.map((element, index) => {
            return (
              <Movie
                key={index*(this.state.listIndex-1)}
                name={element.Title}
                size={element.Size}
                image={element.PictureLink}
                to={element.DownloadLink}
              />
            );
          })}{" "}
        </div>{" "}
        {this.state.isLoading && !this.state.error && (
          <div className="loader">
            <div className="lds-roller">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>{" "}
          </div>
        )}{" "}
      </div>
    );
  }
}

export default App;
