import React ,{useEffect} from "react";
import Movie from "./movie";

function MovieYearList({control , setDescription , year , filterParam}) {
  const condictionArray = []
  // console.log(filterParam)
  const filteredMovies = filterParam.filter(movie => movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0"));
 filteredMovies.map(movie =>{
    if(movie.Year === Number(year)){
      condictionArray.push(movie)
    return <Movie key={movie.Index} data={movie} setDescriptionModal={setDescription}/>;
    } else if(movie.year !== Number(year)){
      return ''
    }
  });
}

export default MovieYearList;