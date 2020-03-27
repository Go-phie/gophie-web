import axios from "axios";
import React, { Component } from "react";
import { RetryIcon, SearchIcon } from "./components/icons";
import MovieList from "./components/MovieList";
import SkeletonLoader from "./components/SkeletonLoader";
import "./css/App.css";
import "./css/loader.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.searchInput = React.createRef();
        this.state = {
            api: "https://gophie.herokuapp.com/",
            server: "netnaija",
            movies: [],
            listIndex: 1,
            isLoading: false,
            hasMore: true,
            error: false
        };

        this.handleWindowScroll();
    }

    handleWindowScroll() {
        window.onscroll = () => {
            const { isLoading, hasMore, error } = this.state;

            // Bails early if:
            // * there's an error
            // * it's already loading
            // * there's nothing left to load
            if (isLoading || !hasMore || error) return;

            const windowHeight =
                "innerHeight" in window ?
                window.innerHeight :
                document.documentElement.offsetHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );

            const windowBottom = windowHeight + window.pageYOffset;
            let query = this.searchInput.current.value;

            if (windowBottom >= docHeight && query === "") {
                this.performList();
            }
        };
    }

    handleSearchChange(event) {
        let query = event.target.value.toLowerCase();
        const filteredMovies = this.state.movies.filter(movie =>
            movie.Title.toLowerCase().includes(query)
        );

        if (query.length === 0) {
            this.performList(false);
            this.setState({ listIndex: 1 });
            return;
        }

        if (filteredMovies.length >= 1) {
            this.setState({
                movies: filteredMovies
            });
            return;
        }

        this.performSearch(query);
    }

    handleServerChange(event) {
        let server = event.target.value;
        this.setState({
            server,
            movies: [],
            listIndex: 1
        }, () => this.performList());

    }

    newSearch() {
        this.setState({
            movies: [],
            error: false
        });
        let query = this.searchInput.current.value;
        this.performSearch(query);
    }

    checkKey(e) {
        if (e.charCode !== 13) return;
        this.setState({ movies: [] });
        let query = this.searchInput.current.value;
        this.performSearch(query);
    }

    performSearch(query) {
        this.setState({
            isLoading: true,
            error: false
        });

        axios
            .get(this.state.api + "search?query=" + query.replace(" ", "+") + '&engine=' + this.state.server)
            .then(res => {
                this.setState({
                    movies: res.data,
                    isLoading: false
                });
            })
            .catch(err => {
                this.setState({
                    error: true
                });
                alert(err);
            });
    }

    performList(append = true) {
        this.setState({
            isLoading: true,
            error: false
        });
        axios
            .get(`${this.state.api}list?page=${this.state.listIndex}&engine=${this.state.server}`)
            .then(res => {
                const movies = res.data;
                let newIndex = this.state.listIndex;
                let newmovies = movies.map((element, index) => {
                    element.Index = element.Index + (newIndex - 1) * 14;
                    return element;
                });
                newIndex += 1;
                this.setState({
                    isLoading: false,
                    movies: append ? [...this.state.movies, ...newmovies] : newmovies,
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

    tryAgain() {
        let query = this.searchInput.current.value;
        if (query.length > 1) {
            this.performSearch(query);
        } else {
            this.performList();
        }
    }

    componentDidMount() {
        this.performList();
    }

    render() {
        return ( <
            div className = "App" >
            <
            div className = "header" >
            <
            div className = "header-left" >
            <
            p > Gophie < /p> < /
            div >

            <
            div className = "header-center" >
            <
            input type = "text"
            ref = { this.searchInput }
            className = "form-control"
            placeholder = "Search for a movie..."
            autoFocus = { true }
            onKeyPress = { this.checkKey.bind(this) }
            onChange = { this.handleSearchChange.bind(this) }
            /> < /
            div >

            <
            div className = "header-right" >
            <
            button onClick = { this.newSearch.bind(this) }
            className = "search-btn" >
            <
            SearchIcon / >
            <
            /button> < /
            div > <
            /div>

            <
            div className = "options" >
            <
            select className = "server-selector"
            onChange = { this.handleServerChange.bind(this) } >
            <
            option value = "NetNaija" > NetNaija < /option> <
            option value = "FzMovies" > FzMovies < /option> <
            option value = "BestHDMovies" > BestHDMovies < /option>< /
            select > <
            /div>

            <
            div className = "movies" >
            <
            MovieList movies = { this.state.movies }
            />

            {
                this.state.isLoading && !this.state.error && ( <
                    div className = "skeleton-movies" >
                    <
                    SkeletonLoader / >
                    <
                    SkeletonLoader / >
                    <
                    SkeletonLoader / >
                    <
                    SkeletonLoader / >
                    <
                    SkeletonLoader / >
                    <
                    /div>
                )
            } {
                this.state.error && ( <
                    div className = "error" >
                    <
                    p className = "error-text" > Oops..An Unknown Error Occured < /p> <
                    button className = "error-retry-btn"
                    onClick = { this.tryAgain.bind(this) } >
                    <
                    RetryIcon / >
                    Try Again <
                    /button> < /
                    div >
                )
            } <
            /div> < /
            div >
        );
    }
}

export default App;
