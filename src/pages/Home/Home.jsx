// vite-project/src/pages/Home/Home.jsx

import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Row from "../../components/Row/Row";
import requests from "../../Requests"; // Assuming requests is where the API URLs are defined
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Row title="Upcoming Movies" fetchURL={requests.fetchUpcomingMovies} />
      <Row title="Popular Movies" fetchURL={requests.fetchPopularMovies} />
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRatedMovies} />
      <Row title="Trending Movies" fetchURL={requests.fetchTrendingMovies} />
      <Row title="Popular TV Series" fetchURL={requests.fetchTvSeries} />
    </div>
  );
};

export default Home;
