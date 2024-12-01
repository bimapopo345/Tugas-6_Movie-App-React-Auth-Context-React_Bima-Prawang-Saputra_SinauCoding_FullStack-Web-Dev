import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTg1MjBiNTYxZmRhMDNjYTE2ZGUwNTY5MWE3YWFlZiIsIm5iZiI6MTczMjUwMzc1NS4xMzM5Nzg2LCJzdWIiOiI2NjQ3NzEyNWExOGU4YTQwYzY2MzAxNWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eXGFk0PGrGwc_MJOWOYNaDozaua65-yODuVwEXJ4PUQ",
};

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?query=${query}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movieId}`,
      { headers }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};