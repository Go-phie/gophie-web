import React from "react";
import Movie from "./movie";

function MovieList({ movies }) {
  console.log(movies);
  
  const filteredMovies = movies.filter(movie => movie.Title.length > 0);
  
  return filteredMovies.map(movie => {
    return <Movie key={movie.Index} data={movie} />;
  });
}

export default MovieList;
