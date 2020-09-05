import React from "react";
import Movie from "../../components/movie/Movie";
require("string_score");

const SearchList = (props) => {
  console.log(props.movies)
  let extraMovie = {
    Index: 5,
    Title: "Eun The Queen",
    Size: "9MB",
    Description: "A nerd sets out to impress his beautiful girlfriend on her birthday. With little or no creative skills to his name, he does what he knows how to do best to show her how he feels...",
    DownloadLink: "https://drive.google.com/uc?export=download&id=1ZghdYAAWZYXicnb_rmRFJVJZYShzcJIP",
    IsSeries: false,
    CoverPhotoLink: "https://drive.google.com/uc?export=sharing&id=1aCeNfR9Iw9TlHLqti-tL3LJza7HRh3uo",
    Source: "NetNaija",
  }
  props.movies.push(extraMovie)
  let filteredMovies = props.movies.filter(
    (movie) =>
      movie.Title.length > 0 && movie.Size !== "" && !movie.Size.startsWith("0")
  );
  filteredMovies.sort(function(a, b){
    return b.Title.score(props.query) - a.Title.score(props.query)
  })

  return (
    <>
      {filteredMovies.length !== 0 ? (
        filteredMovies.map((movie, i) => {
          return (
            <Movie
              key={i}
              data={movie}
              id={movie.Title}
              history={props.history}
              server={props.server}
              setDescriptionModal={props.setDescription}
              shareMovie={props.shareMovie}
              ip_address={props.ip_address}
            />
          );
        })
      ) : (
        <h3 className="mt-5 mb-5 pt-5 pb-5">No result Found</h3>
      )}
    </>
  );
};

export default SearchList;
