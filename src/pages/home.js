import axios from "axios";
import React, { Component } from "react";
import Tour from "reactour";
import { Route } from "react-router-dom";
import { RetryIcon } from "../utils/icons";
import MovieList from "../components/movieList/MovieList";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
import { v4 as uuidv4 } from "uuid";

// style stuff
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import { GlobalStyles } from "../css/global";
import ScrollButton from "../components/scrollToTop/ScrollToTop";
import Popup from "../components/popup/Popup";

import {
  tourSteps,
  disableBody,
  enableBody,
  nameToEngineMap,
  greekFromEnglish,
  API_ENDPOINTS,
} from "../utils";
import NavBar from "../components/navbar/Navbar";
import EngineOptions from "../components/enginOption/EnginOptions";
import TrendingCarousel from "../components/trendingCarousel/TrendingCarousel";
import Footer from "../components/footer/footer";
import ShareModal from "../components/shareModal/ShareModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.searchInput = React.createRef();
    this.state = {
      api: API_ENDPOINTS.gophieMain,
      server: nameToEngineMap.get("Server5"),
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
      isSearch: false,
      showShareModal: false,
      movieToBeShared: {},
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
        isSearch: false,
      },
      () => {
        this.performList();
        this.props.history.push(`/${greekFromEnglish(this.state.server)}`);
      }
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
          isSearch: true,
        },
        () => this.performSearch(query, true)
      );
    }
  }

  checkKey(e) {
    if (e.charCode !== 13) return;
    this.setState({ movies: [], listIndex: 1, isSearch: true });
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
            if (element.Title.endsWith("Tags")) {
              element.Title = element.Title.substr(0, element.Title.length - 4);
            }
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
          if (element.Title.endsWith("Tags")) {
            element.Title = element.Title.substr(0, element.Title.length - 4);
          }
          return element;
        });
        newIndex += 1;
        this.setState(
          {
            isLoading: false,
            movies: append ? [...this.state.movies, ...newmovies] : newmovies,
            listIndex: newIndex,
          },
          console.log(this.state.movies)
        );
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
    axios
      .get(API_ENDPOINTS.ip)
      .then((res) => {
        this.setState({
          ip_address: res.data.ip,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  };

  manageHistory = (props, refresh = true) => {
    const optionalRoute = props.location.pathname.slice(1);
    if (Array.from(nameToEngineMap.keys()).includes(optionalRoute)) {
      this.setState(
        {
          listIndex: 1,
          movies: [],
          server: nameToEngineMap.get(optionalRoute),
        },
        () => {
          if (refresh) {
            this.performList();
          }
        }
      );
    } else {
      this.props.history.push(`/${greekFromEnglish(this.state.server)}`);
    }
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
    this.manageHistory(this.props, false);
  }

  UNSAFE_componentWillUpdate(nextProps, newState) {
    if (
      nextProps.location.pathname !== this.props.location.pathname &&
      Object.keys(newState).length === 0
    ) {
      this.manageHistory(nextProps);
    }
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
    this.setState({
      show: true,
      currentmovie: movie,
    });
  }

  hideDescription() {
    this.setState({ show: false, currentmovie: {} });
    this.props.history.push(`/${greekFromEnglish(this.state.server)}`);
  }

  shareMovie(movie) {
    if (navigator.share) {
      const shareData = {
        title: movie.Title,
        text: movie.Title + "...." + movie.Description,
        url:
          window.location.hostname === "localhost"
            ? `localhost:${window.location.port}/shared/${movie.referralID}`
            : `https://gophie.cam/shared/${movie.referralID}`,
      };

      navigator
        .share(shareData)
        .then(() => console.log("share successful"))
        .catch((err) => console.log(err));
    } else {
      this.setState(
        { movieToBeShared: movie },
        this.setState({ showShareModal: true })
      );
    }
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
              <header>
                <NavBar
                  searchInput={this.searchInput}
                  checkInputKey={this.checkKey.bind(this)}
                  handleSearch={this.handleSearchChange.bind(this)}
                  newSearch={this.newSearch.bind(this)}
                  theme={theme}
                  tour={this.startTour}
                  switchTheme={() => this.switchTheme(this.state.theme)}
                />

                {this.state.isSearch ? null : (
                  <TrendingCarousel
                    setDescription={this.setDescription.bind(this)}
                    history={this.props.history}
                    ip_address={this.state.ip_address}
                  />
                )}

                {!this.state.isSearch ? null : (
                  <div className="mt-1" style={{ display: "grid" }}></div>
                )}
                <EngineOptions
                  handleServerChange={this.handleServerChange.bind(this)}
                  server={this.state.server}
                />
              </header>

              <main>
                <div className="movies" id="movie-div">
                  <Route
                    path={`/${greekFromEnglish(this.state.server)}`}
                    render={() => {
                      return (
                        <MovieList
                          ip_address={this.state.ip_address}
                          movies={this.state.movies}
                          history={this.props.history}
                          server={this.state.server}
                          setDescription={this.setDescription.bind(this)}
                          shareMovie={this.shareMovie.bind(this)}
                        />
                      );
                    }}
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
              </main>

              <Footer />
            </div>
          </>

          {/* ScrollButton Take you back to the starting of the page */}
          <ScrollButton scrollStepInPx="80" delayInMs="16.66" />

          {this.state.showShareModal && (
            <ShareModal
              display={this.state.showShareModal}
              onHide={() => this.setState({ showShareModal: false })}
              movie={this.state.movieToBeShared}
            />
          )}

          {this.state.show && (
            <Popup
              show={this.state.show}
              ip_address={this.state.ip_address}
              movie={this.state.currentmovie}
              shareMovie={this.shareMovie.bind(this)}
              onHide={this.hideDescription.bind(this)}
              server={this.state.server}
            />
          )}
          {/* End ScrollButton */}
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

export default Home;
