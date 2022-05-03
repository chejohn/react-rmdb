import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
} from './config';

import axios from 'axios';

const defaultConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const apiSettings = {
  fetchMovies: async (searchTerm, page) => {
    return await axios.get(`/.netlify/functions/fetchMovies?searchTerm=${searchTerm}&page=${page}`);
  },
  fetchMovie: async movieId => {
    return await axios.get(`/.netlify/functions/fetchMovie?movieId=${movieId}`);
  },
  fetchCredits: async movieId => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await axios.get(`/.netlify/functions/fetchCredits?movieId=${movieId}`);
  }
};

export default apiSettings;
