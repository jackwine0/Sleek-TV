import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../../Requests';  // Adjust the path if necessary
import './HeroSection.css'; // Assuming you are creating a separate CSS file

const HeroSection = () => {
  const [movies, setMovies] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailer, setTrailer] = useState(null);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.fetchPopularMovies).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    }
    return str;
  };

  const handleTrailerClick = async () => {
    if (!movie) return;
    const response = await axios.get(
      `${requests.fetchMovieDetails}/${movie.id}/videos?api_key=${requests.key}`
    );
    const trailerData = response.data.results.find(
      (vid) => vid.type === 'Trailer' && vid.site === 'YouTube'
    );
    setTrailer(trailerData);
    setShowTrailer(true);
  };

  return (
    <div className="hero-section">
      <div className="hero-background">
        {movie && (
          <img
            className="hero-img"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
        <div className="hero-text">
          <h1 className="movie-title">{movie?.title}</h1>
          <p className="movie-description">{truncateString(movie?.overview, 250)}</p>
        </div>
        <div className="hero-buttons">
          <button className="hero-button hero-button-left">Watch Now</button>
          <button className="hero-button hero-button-right" onClick={handleTrailerClick}>
            Trailer
          </button>
          {showTrailer && trailer && (
            <div className="trailer-modal" onClick={() => setShowTrailer(false)}>
              <div className="trailer-content">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
