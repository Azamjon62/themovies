import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "93fc7f9584a58e436d00119da83439d6";

export const api = {
  getPopularMovie: (page) => {
    return axios(BASE_URL + "movie/popular", {
      params: {
        api_key: API_KEY,
        page: page,
      },
    });
  },
  getSingleMovie: (id) => {
    return axios(BASE_URL + `movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
  },
};
