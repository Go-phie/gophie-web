import React, { Component } from "react";
import Movie from "../movie/Movie";

export default class SearchList extends Component {
  render() {
    // const filteredMovies = this.props.movies.filter(
    //   (movie) =>
    //     movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0")
    // );
    this.props.movies.map((movie, i) => {

        return console.log("cheking:", movie)
    });

          return (
              <>
                {this.props.movies.map((movie, i) => {
                   return (<Movie
                        key={i}
                        data={movie}
                        id={movie.Title}
                        history={this.props.history}
                        server={this.props.server}
                        setDescriptionModal={this.props.setDescription}
                        shareMovie={this.props.shareMovie}
                        ip_address={this.props.ip_address}
                      />)
                })}
              </>
          )
  }
}