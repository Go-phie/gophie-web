import React from "react";
import Movie from "./movie";

function MovieYear({ ip_address, movies, setDescription ,year }) {
  const filteredMovies = movies.filter(movie => movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0"));
  
  return filteredMovies.map(movie => {
      if(movie.Year === Number(year)){
    return <Movie key={movie.Index} data={movie} setDescriptionModal={setDescription} ip_address={ip_address}/>
      };
      return ''
  });
}

export default MovieYear;
