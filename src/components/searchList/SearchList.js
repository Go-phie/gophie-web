import React from "react";
import Movie from "../../components/movie/Movie";

require("string_score");

const SearchList = (props) => {
  let filteredMovies = props.movies.filter(
    (movie) =>
      movie.name.length > 0 && movie.size !== "" && !movie.size.startsWith("0")
  );
  filteredMovies.sort(function (a, b) {
    return b.name.score(props.searchInput) - a.name.score(props.searchInput);
  });

  return (
    <>
      {filteredMovies.length !== 0 ? (
        filteredMovies.map((movie, i) => {
          return (
            <Movie
              key={i}
              data={movie}
              id={movie.name}
              history={props.history}
              server={props.server}
              setDescriptionModal={props.setDescription}
              shareMovie={props.shareMovie}
              ip_address={props.ip_address}
            />
          );
        })
      ) : (
        <h3
          className="mt-5 mb-5 pt-5 pb-5 text-center"
          style={{ margin: "0 auto" }}
        >
          No result Found
        </h3>
      )}
    </>
  );
};

export default SearchList;
