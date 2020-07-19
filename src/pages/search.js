import React, { Component } from "react";
// import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import SearchList from "../components/movieList/searchList";
import Footer from "../components/footer/footer";
import { GlobalStyles } from "../css/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../css/theme";
import "../css/shared.css";
import { nameToEngineMap } from "../utils";

class Search extends Component {
    constructor(state) {
        super(state);
        this.state ={
            servers: ["Server1", "Server2", "Server3", "Server4"].map((item) => {return nameToEngineMap.get(item)}),
            movies: [],
            query: "",
            listIndex: 1,
            isLoading: false,
            show: false,
            currentmovie: {},
            hasMore: true,
            error: false,
            searchError: "",
            theme: "light",
            isSearch: false,
        }
    }

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

    render(){
        const { theme } = this.state;
        const selectedTheme = theme === "light" ? lightTheme : darkTheme;
        return(
            <div className="search-container">
                <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles />
                    <NavBar switchTheme={() => this.switchTheme(this.state.theme)} />

                    <div className="container">
                        <h1>Search Results</h1>
                        <SearchList
                            ip_address={this.state.ip_address}
                            movies={this.state.movies}
                            history={this.props.history}
                            servers={this.state.servers}
                            query={this.state.query}
                            setDescription={this.setDescription.bind(this)}
                            shareMovie={this.shareMovie.bind(this)}
                          />
                    </div>

                    <div className="mt-5">
                        <Footer />
                    </div>
                </ThemeProvider>
            
                </div>
        );
    }
}
export default Search;