const API_KEY = "6a3a8438ff404196f75474de75e61aeb";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOrigin: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&Language=eu-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export const rowData = [
//   { id: 1, title: "Netflix Original", endUrl: request.fetchNetflixOrigin },
//   { id: 2, title: "Trending Now", endUrl: request.fetchTrending },
//   { id: 3, title: "Top Rated", endUrl: request.fetchTopRated },
//   { id: 4, title: "Action Movies", endUrl: request.fetchActionMovies },
//   { id: 5, title: "Comedy Movies", endUrl: request.fetchComedyMovies },
// ];

export default request;
