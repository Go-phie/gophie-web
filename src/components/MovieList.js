import React from "react";
import Movie from "./movie";

function MovieList({ movies, setDescription }) {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0")
  );

  return filteredMovies.map((movie) => {
    return (
      <Movie
        key={movie.Index}
        data={movie}
        setDescriptionModal={setDescription}
      />
    );
  });
}

export default MovieList;
