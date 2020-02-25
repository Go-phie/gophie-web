import React from "react";
import Movie from "./movie";

function MovieList({ movies }) {
  return movies.map(movie => {
    return <Movie key={movie.Index} data={movie} />;
  });
}

export default MovieList;
