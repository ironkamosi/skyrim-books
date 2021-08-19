import React from "react";

const MovieList = ({ movies }) => {
  console.log(`movies`, movies)
  const movieItems = movies.map((movie) => {
    return <li key={movie.id}>{movie.title}</li>;
  });
  return (
    <div className="movie-list">
      <ul>
        <p>{movieItems}</p>
      </ul>
    </div>
  );
};

export default MovieList;
