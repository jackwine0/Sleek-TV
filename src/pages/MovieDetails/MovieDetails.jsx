import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import requests from '../../Requests';
import './MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await axios.get(`${requests.fetchMovieDetails}/${id}?api_key=${requests.key}`);
        setMovie(movieResponse.data);

        const trailersResponse = await axios.get(`${requests.fetchMovieDetails}/${id}/videos?api_key=${requests.key}`);
        const trailer = trailersResponse.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        setTrailer(trailer);

        const castResponse = await axios.get(`${requests.fetchMovieCast.replace('{id}', id)}?api_key=${requests.key}`);
        setCast(castResponse.data.cast);

        const similarMoviesResponse = await axios.get(`${requests.fetchSimilarMovies.replace('{id}', id)}?api_key=${requests.key}`);
        setSimilarMovies(similarMoviesResponse.data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div
      className="movie-details-page"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="movie-details-content">
        {movie && (
          <>
            <div className="movie-title">
              <h1>{movie.title}</h1>
              <h2>{movie.release_date}</h2>
              <p>{movie.overview}</p>
            </div>
            <div className="watch-trailer">
              <div className="play">
                <button className="play-button">Watch Now</button>
              </div>
              <div className="trailer-section">
                {trailer && (
                  <button className="play-button" onClick={() => setShowTrailer(true)}>
                    Trailer
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="additional-content">
        <section className="cast-section">
          <h3>Cast</h3>
          <div className="cast-list">
            {cast.slice(0, 8).map(member => (
              <div className="cast-member" key={member.cast_id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${member.profile_path}`}
                  alt={member.name}
                />
                <p>{member.name}</p>
                <p>{member.character}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="similar-movies-section">
          <h3>Similar Movies</h3>
          <div className="similar-movies">
            {similarMovies.slice(0, 8).map(movie => (
              <Link to={`/movie/${movie.id}`} className="similar-movie" key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
      {showTrailer && (
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
  );
};

export default MovieDetails;
