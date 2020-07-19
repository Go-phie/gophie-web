import React, { Component } from "react";
import { Route } from "react-router-dom";
import Movie from "../movie/Movie";

export default class SearchList extends Component {
    
  render() {
    console.log("here");
    const servers = this.props.servers;
    const query = encodeURI(this.props.query);
    const filteredMovies = this.props.movies.filter(
      (movie) =>
        movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0")
    );
    
    return servers.map((server) => {
        return(
        filteredMovies.map((movie) => {
        return (
            <Route 
            path={`/${query}`}
            key={movie.Index}
            render={() => {
            return (
                <Movie
                data={movie}
                id={movie.Title}
                history={this.props.history}
                server= {server}
                setDescriptionModal={this.props.setDescription}
                shareMovie={this.props.shareMovie}
                ip_address={this.props.ip_address}
            />
            )
            }}/>
        );
        })
        );
    });
  }
}