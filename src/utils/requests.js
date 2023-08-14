// const API_KEY = "504b85f6fe0a10a9c7f35945e14e7ddf";

// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
// };

const requests = {
  fetchTrending: "movies/trending/1/ja",
  fetchNetflixOriginals: `movies/discover/1/12`,
  fetchTopRated: `movies/discover/1/12`,
  fetchActionMovies: `movies/discover/1/28`,
  fetchComedyMovies: `movies/discover/1/35`,
  fetchHorrorMovies: `movies/discover/1/27`,
  fetchRomanceMovies: `movies/discover/1/10749`,
  fetchDocumentaries: `movies/discover/1/99`,
  fetchSearch: `movies/search`,
};

export default requests;
