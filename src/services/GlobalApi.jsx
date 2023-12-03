import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "bfd1ba0c8065eee186f6c9ec7ad12b52";

// const getTrendingVideos = axios.get(
//   movieBaseUrl + "trending/all/day?api_key" + api_key
// );

// https://api.themoviedb.org/3/trending/all/day?api_key=bfd1ba0c8065eee186f6c9ec7ad12b52

const getTrendingVideos = axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=bfd1ba0c8065eee186f6c9ec7ad12b52");

export default {
  getTrendingVideos,
};
