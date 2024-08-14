import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import requests from '../../Requests';
import './SearchResults.css';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const query = new URLSearchParams(location.search).get('query');
  const resultsPerPage = 10;

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const response = await fetch(`${requests.searchMovies}${query}`);
        const data = await response.json();
        setResults(data.results);
      }
    };

    fetchSearchResults();
  }, [query]);

  const totalPages = Math.ceil(results.length / resultsPerPage);
  const currentResults = results.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="search-results">
        {currentResults.map((movie) => (
          <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-card__poster"
              />
              <div className="movie-card__details">
                <h3 className="movie-card__title">{movie.title}</h3>
                <p className="movie-card__release-date">{movie.release_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`pagination__button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
