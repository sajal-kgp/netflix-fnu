import React, { useEffect, useState } from "react";
// import axios from './axios';
import axios from "axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, dataEndUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // some link
      autoplay: 1,
    },
  };

  console.table(movies);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_poster_fetch_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opt={opts} />}
    </div>
  );
}

export default Row;
