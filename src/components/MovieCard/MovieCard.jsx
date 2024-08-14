import React from 'react';
import { FaHeart, FaRegHeart, FaTimes } from 'react-icons/fa';
import './MovieCard.css'; // Ensure this CSS file is properly created

const MovieCard = ({ item, index, likeStatus, toggleLike, handleMovieClick, isWatchlist, removeFromWatchlist }) => {
  return (
    <div className="row-item" onClick={() => handleMovieClick(item.id)}>
      <div className="image-container">
        <img
          className="row-img"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt={item.title}
        />
        <div className="overlay">
          <p className="overlay-text">{item.title}</p>
        </div>
        {isWatchlist ? (
          <div className="delete-button" onClick={(e) => {
            e.stopPropagation(); // Prevent click event from bubbling up to row-item
            removeFromWatchlist(item.id);
          }}>
            <FaTimes className='delete-icon' />
          </div>
        ) : (
          <div className="like-button" onClick={(e) => {
            e.stopPropagation(); // Prevent click event from bubbling up to row-item
            toggleLike(index);
          }}>
            {likeStatus ? (
              <FaHeart className='like-icon' />
            ) : (
              <FaRegHeart className='like-icon' />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
