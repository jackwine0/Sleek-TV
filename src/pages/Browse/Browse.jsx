import React, { useState } from 'react';
import TabNavigation from '../../components/TabNavigation/TabNavigation';
import ContentGrid from '../../components/ContentGrid/ContentGrid';
import './Browse.css';

const Browse = () => {
  const [activeCategory, setActiveCategory] = useState('movies');
  const [activeTab, setActiveTab] = useState('action');

  const categories = {
    movies: ['action', 'scifi', 'horror'],
    tvShows: ['action', 'scifi', 'horror'],
    originalContent: ['seminar', 'tutorials', 'documentary'],
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveTab(categories[category][0]); // Set default tab for new category
  };

  return (
    <div className="browse-page">
      <div className="category-buttons">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={`category-button ${activeCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
          </button>
        ))}
      </div>
      <TabNavigation
        tabs={categories[activeCategory]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <ContentGrid category={activeCategory} genre={activeTab} />
    </div>
  );
};

export default Browse;
