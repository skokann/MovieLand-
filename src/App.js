import { useEffect } from "react";
import "./App.css";
import search from "./img/search.svg";
import MovieCard from "./MovieCard";
import { useState } from "react";
//   d0caa3b5

const API_URL = "https://www.omdbapi.com?apikey=d0caa3b5&";


const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
 

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for a movie..."
          defaultValue="Superman"
          onChange={(event) => searchMovies(event.target.value)}
        />

        <img src={search} alt="search icon" onClick={() => {}}></img>
      </div>

      <div className="container">
        {movies && 
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    
  );
};

export default App;
