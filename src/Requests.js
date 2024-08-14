// API key
const key = '93e9df3782487f0b4ca7fe295ebd4d13';

// Base URL for the API
const baseURL = 'https://api.themoviedb.org/3';

// API request endpoints
const requests = {
  key, // Include API key
  // Movie Endpoints
  fetchActionMovies: `${baseURL}/discover/movie?api_key=${key}&with_genres=28&language=en-US&page=1`,
  fetchSciFiMovies: `${baseURL}/discover/movie?api_key=${key}&with_genres=878&language=en-US&page=1`,
  fetchHorrorMovies: `${baseURL}/discover/movie?api_key=${key}&with_genres=27&language=en-US&page=1`,
  // TV Show Endpoints
  fetchActionTV: `${baseURL}/discover/tv?api_key=${key}&with_genres=10759&language=en-US&page=1`,
  fetchSciFiTV: `${baseURL}/discover/tv?api_key=${key}&with_genres=10765&language=en-US&page=1`,
  fetchHorrorTV: `${baseURL}/discover/tv?api_key=${key}&with_genres=9648&language=en-US&page=1`,
  // Original Content Endpoints (Placeholders, replace with actual categories or genres)
  fetchSeminars: `${baseURL}/discover/movie?api_key=${key}&with_genres=99&language=en-US&page=1`, // Documentary
  fetchTutorials: `${baseURL}/discover/movie?api_key=${key}&with_genres=99&language=en-US&page=1`, // Documentary
  fetchDocumentaries: `${baseURL}/discover/movie?api_key=${key}&with_genres=99&language=en-US&page=1`, // Documentary
  // Common Endpoints
  fetchPopularMovies: `${baseURL}/movie/popular?api_key=${key}&language=en-US&page=1`,
  fetchTopRatedMovies: `${baseURL}/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchTrendingMovies: `${baseURL}/trending/movie/week?api_key=${key}`,
  fetchTvSeries: `${baseURL}/tv/popular?api_key=${key}&language=en-US&page=1`,
  fetchUpcomingMovies: `${baseURL}/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  fetchPopularTV: `${baseURL}/tv/popular?api_key=${key}&language=en-US&page=1`,
  fetchTopRatedTV: `${baseURL}/tv/top_rated?api_key=${key}&language=en-US&page=1`,
  fetchTrendingTV: `${baseURL}/trending/tv/week?api_key=${key}`,
  fetchMovieDetails: `${baseURL}/movie`, // Base endpoint for movie details
  fetchMovieCast: `${baseURL}/movie/{id}/credits`, // Endpoint for movie cast
  fetchSimilarMovies: `${baseURL}/movie/{id}/similar`, // Endpoint for similar movies
  searchMovies: `${baseURL}/search/movie?api_key=${key}&query=`,
};

export default requests;
