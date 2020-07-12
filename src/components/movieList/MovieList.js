import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movie from "../movie/Movie";
import { greekFromEnglish } from "../../utils";

export default class MovieList extends Component {
  render() {
    const filteredMovies = this.props.movies.filter(
      (movie) =>
        movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0")
    );

    return filteredMovies.map((movie) => {
      return (
        <Route 
        path={`/${greekFromEnglish(movie.Source)}`}
        key={movie.Index}
        render={() => {
          return (
            <Movie
            data={movie}
            id={movie.Title}
            history={this.props.history}
            server={this.props.server}
            setDescriptionModal={this.props.setDescription}
            shareMovie={this.props.shareMovie}
            ip_address={this.props.ip_address}
          />
          )
        }}/>
      );
    });
  }
}