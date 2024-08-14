import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/search-results?query=${input}`);
    }
  };

  return (
    <div className='search-drop'>
    <div className="search-header">
      <input
        placeholder="Search"
        className="search-header__input"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button className="search-header__button" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} className="search-header__icon" />
      </button>
    </div>
    </div>
  );
};

export default Search;
