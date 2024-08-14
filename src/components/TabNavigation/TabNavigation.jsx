import React from 'react';
import './TabNavigation.css';

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="tab-navigation">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
