import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "./request";
import "./Banner.css";

function Banner() {
  const [movie, setMovies] = useState({});

  const base_movie_fetch_url = "https://api.themoviedb.org/3";
  const base_poster_fetch_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request1 = await axios.get(
        `${base_movie_fetch_url}${request.fetchNetflixOrigin}`
      );
      setMovies(
        request1.data.results[
          Math.floor(Math.random() * (request1.data.results.length - 1))
        ]
      );
      return request1;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_poster_fetch_url}${movie?.backdrop_path})`,
        backgroundPosition: "center cnter",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
        <div className="banner_fadeBotton" />
      </div>
    </header>
  );
}

export default Banner;
