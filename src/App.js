import axios from "axios";
import React, { Component } from "react";
import Tour from "reactour";
import {
  RetryIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  GitMark,
  WalkingIcon,
} from "./components/icons";
import MovieList from "./components/MovieList";
import SkeletonLoader from "./components/SkeletonLoader";
import { v4 as uuidv4 } from "uuid";

// style stuff
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./css/theme";
import { GlobalStyles } from "./css/global";
import ScrollButton from "./components/ScrollToTop";
import Popup from "./components/Popup";
import { tourSteps, disableBody, enableBody, nameToEngineMap } from "./utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      api: "https://gophie.herokuapp.com/",
      server: nameToEngineMap.get("Alpha"),
      mode: "movies",
      movies: [],
      listIndex: 1,
      isLoading: false,
      show: false,
      currentmovie: {},
      hasMore: true,
      error: false,
      searchError: "",
      theme: "light",
      showTour: true,
      ip_address: "",
    };
  }

  isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  handleScroll = () => {
    const query = this.searchInput.current.value;
    const { isLoading, hasMore, error, server } = this.state;
    const wrappedElement = document.getElementById("movie-div");

    if (isLoading || !hasMore || error) return;

    if (this.isBottom(wrappedElement) && query === "") {
      this.performList();
    }
    if (
      this.isBottom(wrappedElement) &&
      query !== "" &&
      server === "tvseries"
    ) {
      this.performSearch(query, true);
    }
  };

  handleSearchChange(event) {
    let query = event.target.value.toLowerCase();
    this.setState({ listIndex: 1 });
    if (query.length === 0) {
      this.setState({ listIndex: 1 }, () => this.performList(false));
      return;
    }

    const filteredMovies = this.state.movies.filter((movie) =>
      movie.Title.toLowerCase().includes(query)
    );
    if (filteredMovies.length >= 1) {
      this.setState({
        movies: filteredMovies,
      });
      return;
    }
  }

  handleServerChange(event) {
    let server = nameToEngineMap.get(event.target.value);
    this.searchInput.current.value = "";
    this.setState(
      {
        server,
        movies: [],
        listIndex: 1,
      },
      () => this.performList()
    );
  }

  newSearch() {
    let query = this.searchInput.current.value;
    if (query.trim().length > 1) {
      this.setState(
        {
          movies: [],
          error: false,
          listIndex: 1,
        },
        () => this.performSearch(query, true)
      );
    }
  }

  checkKey(e) {
    if (e.charCode !== 13) return;
    this.setState({ movies: [], listIndex: 1 });
    let query = this.searchInput.current.value;
    this.performSearch(query);
  }

  performSearch = (query, append = false) => {
    this.setState({
      isLoading: true,
      error: false,
      searchError: "",
    });

    axios
      .get(
        this.state.api +
          "search?query=" +
          encodeURI(query.trim()) +
          "&engine=" +
          this.state.server +
          "&page=" +
          this.state.listIndex
      )
      .then((res) => {
        const movies = res.data;
        if (movies !== null) {
          let newmovies = movies.map((element) => {
            element.Index = uuidv4();
            return element;
          });
          this.setState({
            movies: append ? [...this.state.movies, ...newmovies] : newmovies,
            isLoading: false,
            listIndex: append ? this.state.listIndex + 1 : 1,
          });
        } else {
          throw new Error("Search returned empty, try another engine perhaps");
        }
      })
      .catch((err) => {
        this.setState({
          error: true,
          searchError: err.message,
        });
      });
  };

  performList = (append = true) => {
    this.setState({
      isLoading: true,
      error: false,
      searchError: "",
    });
    axios
      .get(
        `${this.state.api}list?page=${this.state.listIndex}&engine=${this.state.server}`
      )
      .then((res) => {
        const movies = res.data;
        let newIndex = this.state.listIndex;
        let newmovies = movies.map((element) => {
          element.Index = uuidv4();
          return element;
        });
        newIndex += 1;
        this.setState({
          isLoading: false,
          movies: append ? [...this.state.movies, ...newmovies] : newmovies,
          listIndex: newIndex,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true,
        });
      });
  };

  tryAgain() {
    let query = this.searchInput.current.value;
    if (query.trim().length > 1) {
      this.performSearch(query.trim());
    } else {
      this.performList();
    }
  }

  getIp = () => {
    axios.get("https://api.ipify.org?format=json").then((res) => {
      this.setState({
        ip_address: res.data.ip,
      });
    });
  };

  toggleMode() {
    switch (this.state.mode) {
      case "series":
        this.setState({ mode: "movies" });
        break;
      case "movies":
        this.setState({ mode: "series" });
        break;
      default:
        this.setState({ mode: "movies" });
    }
  }

  UNSAFE_componentWillMount() {
    this.setTour();
  }

  componentDidMount() {
    this.getIp();
    this.setTheme();
    this.performList();
    if (!localStorage.getItem("viewedTour")) {
      this.startTour();
      localStorage.setItem("viewedTour", "true");
    }
    document.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  setTheme() {
    const theme = localStorage.getItem("theme");
    if (theme !== null) {
      this.switchTheme(theme === "light" ? "dark" : "light");
    }
  }

  setTour() {
    const tour = localStorage.getItem("showTour");
    const showTour = tour === "true";
    this.setState({ showTour }, () =>
      console.log(`setting tour to ${showTour}`)
    );
  }

  closeTour = () => {
    this.setState({ showTour: false });
    localStorage.setItem("showTour", false);
  };

  startTour = () => {
    this.setState({ showTour: true });
  };

  switchTheme(mode) {
    switch (mode) {
      case "light":
        localStorage.setItem("theme", "dark");
        this.setState({ theme: "dark" });
        break;
      case "dark":
        localStorage.setItem("theme", "light");
        this.setState({ theme: "light" });
        break;
      default:
        break;
    }
  }

  setDescription(movie) {
    this.setState(
      {
        show: true,
        currentmovie: movie,
      },
      () => console.log(this.state)
    );
  }

  hideDescription() {
    this.setState({ show: false }, () => console.log(this.state));
  }

  render() {
    const { theme } = this.state;
    const selectedTheme = theme === "light" ? lightTheme : darkTheme;
    return (
      <>
        <ThemeProvider theme={selectedTheme}>
          <>
            <GlobalStyles />
            <div className="App">
              <div className="header">
                <div className="header-left">
                  <p>
                    {" "}
                    G<span className="em">o</span>phie{" "}
                  </p>
                </div>
                <div className="header-center">
                  <input
                    type="text"
                    ref={this.searchInput}
                    className="form-control"
                    placeholder="Search for a movie..."
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus={true}
                    onKeyPress={this.checkKey.bind(this)}
                    onChange={this.handleSearchChange.bind(this)}
                  />
                </div>
                <div className="header-right">
                  <button
                    onClick={this.newSearch.bind(this)}
                    className="search-btn"
                    data-tour="my-third-step"
                  >
                    <SearchIcon />
                  </button>
                </div>
              </div>
              <div className="options">
                <select
                  className="server-selector"
                  data-tour="my-second-step"
                  onChange={this.handleServerChange.bind(this)}
                  onBlur={this.handleServerChange.bind(this)}
                >
                  <option value="Alpha"> Alpha </option>
                  <option value="Delta"> Delta </option>
                  <option value="Iota"> Iota (HD) </option>
                  <option value="Zeta"> Zeta (Series) </option>
                </select>
                <div className="options__sub-details">
                  <button
                    className="actions-button tour-button"
                    data-tour="my-first-step"
                    title="Take A Tour"
                    onClick={this.startTour}
                  >
                    {" "}
                    <WalkingIcon />{" "}
                  </button>
                  <button
                    className="switch-theme-btn"
                    data-tour="my-eight-step"
                    title="Change Theme"
                    onClick={() => this.switchTheme(this.state.theme)}
                  >
                    {theme === "dark" ? <SunIcon /> : <MoonIcon />}
                  </button>
                  <a
                    className="actions-button github-button"
                    href="https://github.com/go-phie/gophie-web"
                    data-tour="my-ninth-step"
                    title="Github Link"
                  >
                    {" "}
                    <GitMark />{" "}
                  </a>
                </div>
              </div>
              <div className="movies" id="movie-div">
                <MovieList
                  movies={this.state.movies}
                  setDescription={this.setDescription.bind(this)}
                />
                {this.state.isLoading && !this.state.error && (
                  <div className="skeleton-movies">
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                  </div>
                )}
                {this.state.error && (
                  <div className="error">
                    <p className="error-text">
                      {this.state.searchError !== ""
                        ? this.state.searchError
                        : "Oops..An Unknown Error Occured"}{" "}
                    </p>
                    {this.state.searchError ? null : (
                      <button
                        className="error-retry-btn"
                        onClick={this.tryAgain.bind(this)}
                      >
                        <RetryIcon />
                        Try Again
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>

          {/* ScrollButton Take you back to the starting of the page */}
          <ScrollButton scrollStepInPx="80" delayInMs="16.66" />
          {this.state.show && (
            <Popup
              show={this.state.show}
              ip_address={this.state.ip_address}
              movie={this.state.currentmovie}
              onHide={this.hideDescription.bind(this)}
              server = {this.state.server}
            />
          )}
        </ThemeProvider>

        {/* Tour Component Element */}
        <Tour
          steps={tourSteps}
          isOpen={this.state.showTour}
          onAfterOpen={disableBody}
          onBeforeClose={enableBody}
          onRequestClose={this.closeTour}
        />
      </>
    );
  }
}

export default App;
