import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Row.css'; // Import CSS file for styling

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const [likes, setLikes] = useState([]);
  const rowRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
        setLikes(Array(response.data.results.length).fill(false));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchMovies();
  }, [fetchURL]);

  const scrollLeft = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: -window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: window.innerWidth / 2, behavior: 'smooth' });
    }
  };

  const toggleLike = (index) => {
    setLikes((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = !newLikes[index];

      // Save liked movies to local storage
      const likedMovies = newLikes
        .map((isLiked, i) => isLiked && movies[i])
        .filter(Boolean);

      localStorage.setItem('likedMovies', JSON.stringify(likedMovies));
      return newLikes;
    });
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`); // Navigate to movie details page
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-slider-container">
        <button className="nav-button nav-button-left" onClick={scrollLeft}>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722981365/icons8-back-100_caagax.png"
            alt="Back"
          />
        </button>
        <div className="row-slider" ref={rowRef}>
          {movies.map((item, index) => (
            <MovieCard
              key={item.id}
              item={item}
              index={index}
              likeStatus={likes[index]}
              toggleLike={toggleLike}
              handleMovieClick={handleMovieClick}
            />
          ))}
        </div>
        <button className="nav-button nav-button-right" onClick={scrollRight}>
          <img
            src="https://res.cloudinary.com/duicyr28v/image/upload/v1722981365/icons8-forward-100_qus0nq.png"
            alt="Forward"
          />
        </button>
      </div>
    </div>
  );
};

export default Row;
