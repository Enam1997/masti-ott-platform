import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const api_key = "bfd1ba0c8065eee186f6c9ec7ad12b52";

const getTrendingVideos = axios.get(this.movieBaseUrl+"trending/all/day?api_key"+api_key);


export default {
    getTrendingVideos
}
