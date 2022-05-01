const axios = require('axios');

exports.handler = async function (event) {
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { searchTerm, page } = event.queryStringParameters;
  const endpoint = searchTerm ? `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${page}` : `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

  try {
      const {data} = await axios.get(endpoint);
      return {
          statusCode: 200,
          body: JSON.stringify(data)
      }
  } catch (error) {
      const {status, statusText, headers, data} = error.response;
      return {
          status,
          body: JSON.stringify({status, statusText, headers, data})
      }
  }
};
