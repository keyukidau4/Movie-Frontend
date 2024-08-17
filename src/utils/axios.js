import axios from "axios";

/** base url to make request to the themoviedatabase */

const instance = axios.create({
  // baseURL: 'https://api.themoviedb.org/3'
  // baseURL: "http://localhost:8080/api/",
  baseURL: "https://movie-backend-three.vercel.app/",
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
