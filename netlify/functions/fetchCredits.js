const axios = require('axios');

exports.handler = async function (event) {
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { movieId } = event.queryStringParameters;
  const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const { data } = await axios.get(creditsEndpoint);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { statusText, headers, data } = error.response;
    return {
      statusCode: 404,
      body: JSON.stringify({ statusText, headers, data }),
    };
  }
};

