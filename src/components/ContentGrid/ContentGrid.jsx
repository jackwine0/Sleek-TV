import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import requests from '../../Requests'; // Import your updated requests object
import './ContentGrid.css';

const ContentGrid = ({ category, genre }) => {
  const [content, setContent] = useState([]);
  const navigate = useNavigate();

  // Define mappings from category and genre to request endpoints
  const categoryGenreMap = {
    movies: {
      action: requests.fetchActionMovies,
      scifi: requests.fetchSciFiMovies,
      horror: requests.fetchHorrorMovies,
    },
    tvShows: {
      action: requests.fetchActionTV,
      scifi: requests.fetchSciFiTV,
      horror: requests.fetchHorrorTV,
    },
    originalContent: {
      seminar: requests.fetchSeminars,
      tutorials: requests.fetchTutorials,
      documentary: requests.fetchDocumentaries,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(categoryGenreMap[category][genre]);
        setContent(response.data.results.slice(0, 9)); // Get first 9 items
      } catch (error) {
        console.error('Error fetching data from TMDB:', error);
      }
    };

    fetchData();
  }, [category, genre]);

  const handleItemClick = (id) => {
    navigate(`/movie/${id}`); // Navigate to the movie details page
  };

  return (
    <div className="content-grid">
      {content.map((item) => (
        <div key={item.id} className="content-item" onClick={() => handleItemClick(item.id)}>
          <img
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title || item.name}
          />
          <p>{item.title || item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ContentGrid;
