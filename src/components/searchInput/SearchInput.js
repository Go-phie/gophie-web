import React from "react";
import "../../components/navbar/navbar.css";

const SearchInput = () => {
    handleServerChange(event) {
        let server = nameToEngineMap.get(event.target.value);
        this.searchInput.current.value = "";
        this.setState(
        {
            server,
            movies: [],
            listIndex: 1,
            isSearch: false
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
            isSearch: true
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
      searchError: ""
    });

    this.props.history.push("/search");

    const searchServer1 = axios.get(
      this.state.api +
        "search?query=" +
        encodeURI(query.trim()) +
        "&engine=" +
        nameToEngineMap.get("Server2") +
        "&page=" +
        this.state.listIndex
    );

    const searchServer2 = axios.get(
      this.state.api +
        "search?query=" +
        encodeURI(query.trim()) +
        "&engine=" +
        nameToEngineMap.get("Server2") +
        "&page=" +
        this.state.listIndex
    );

    const searchServer3 = axios.get(
      this.state.api +
        "search?query=" +
        encodeURI(query.trim()) +
        "&engine=" +
        nameToEngineMap.get("Server3") +
        "&page=" +
        this.state.listIndex
    );

    const searchServer4 = axios.get(
      this.state.api +
        "search?query=" +
        encodeURI(query.trim()) +
        "&engine=" +
        nameToEngineMap.get("Server4") +
        "&page=" +
        this.state.listIndex
    );

    const searchServer5 = axios.get(
      this.state.api +
        "search?query=" +
        encodeURI(query.trim()) +
        "&engine=" +
        nameToEngineMap.get("Server5") +
        "&page=" +
        this.state.listIndex
    );

    axios
      .all([
        searchServer1,
        searchServer2,
        searchServer3,
        searchServer4,
        searchServer5
      ])
      .then(
        axios.spread(
          (
            searchServer1,
            searchServer2,
            searchServer3,
            searchServer4,
            searchServer5
          ) => {
            const concatSearchServer1 = !searchServer1.data
              ? []
              : searchServer1.data;

            const movies = concatSearchServer1
              .concat(searchServer2.data)
              .concat(searchServer3.data)
              .concat(searchServer4.data)
              .concat(searchServer5.data);
            const mainMovies = [];

            movies.forEach((movies) => {
              if (movies !== null) {
                mainMovies.push(movies);
              }
            });

            this.setState({
              movies: [...mainMovies],
              isLoading: false,
              isSearch: true,
              listIndex: append ? this.state.listIndex + 1 : 1
            });
          }
        )
      )
      .catch((err) => {
        this.setState({
          error: true,
          searchError: err.message
        });
      });
  };

  performList = (append = true) => {
    this.setState({
      isLoading: true,
      error: false,
      searchError: ""
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
            listIndex: newIndex
          },
          console.log(this.state.movies)
        );
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          error: true
        });
      });
  };

  return (
        <input
              type="text"
              ref={this.props.searchInput}
              className="form-control"
              placeholder="Search movie..."
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              onKeyPress={this.props.checkInputKey}
              // onChange={this.props.handleSearch}
            />
            <Link to={`/search`} >
              <button
                onClick={this.props.newSearch}
                className="search-btn"
                data-tour="my-third-step"
              >
                <FontAwesomeIcon
                  className="form-control-feedback search-btn "
                  aria-hidden="true"
                  icon={faSearch}
                />
              </button>
            </Link>
  )
}