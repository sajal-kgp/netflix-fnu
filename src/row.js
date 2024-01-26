import React, { useEffect, useState } from "react";
// import axios from './axios';
import axios from "axios";
import "./Row.css";

function Row({ title, dataEndUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  const base_movie_fetch_url = "https://api.themoviedb.org/3";
  const base_poster_fetch_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(`${base_movie_fetch_url}${dataEndUrl}`);
      setMovies(request.data.results);
      return request;
    }
    fetchMovies();
  }, [dataEndUrl]);

  console.table(movies);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_poster_fetch_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
