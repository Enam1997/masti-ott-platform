import axios from "axios";

const api_key = "bfd1ba0c8065eee186f6c9ec7ad12b52";

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf";

const getTrendingVideos = axios.get(
  "https://api.themoviedb.org/3/trending/all/day?api_key=bfd1ba0c8065eee186f6c9ec7ad12b52"
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
