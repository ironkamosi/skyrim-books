import "./App.css";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import React, { useState, useEffect } from "react";
import MovieList from "./MovieList.jsx";

function App() {
  const [movie, setMovie] = useState([]); // movie array
  const [searchTerm, setSearchTerm] = useState("shaft");
  
  async function getData() {
    // use when I find a good api
    //const response = await fetch(
    //  "booksAPI.json"
    // );
    // const booklist = await response.json();
    //return booklist

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=01dc3c490fcd2656d7db091758794e10&query=${searchTerm}`
    );
    const movieList = await response.json();
    console.log(movieList);
    setMovie(movieList.results);
  }

  useEffect(() => {
    if (searchTerm)  getData();
    else setMovie([]);
  }, [searchTerm]
  );

  return (
    <div className="App">
      <NavBar />
      <SearchBar submitText={setSearchTerm}  />
      <MovieList movies={movie} />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
