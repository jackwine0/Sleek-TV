import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Signup from "./auth/SignUp/Signup";
import Login from "./auth/Login/Login";
import ForgotPassword from "./auth/ForgotPassword";
import ConfirmPassword from "./auth/ConfirmPassword/ConfirmPassword";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import Watchlist from "./pages/Watchlist/Watchlist";
import Downloads from "./pages/Downloads/Downloads";
import Profile from "./pages/Profile/Profile";
import Error404 from "./pages/Error404/Error404";
import "./App.css";
import Browse from "./pages/Browse/Browse";

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/confirm-password" element={<ConfirmPassword />} />

          {/* Non-Auth Routes */}
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/movie/:id" element={<Layout><MovieDetails /></Layout>} />
          <Route path="/search-results" element={<Layout><SearchResults /></Layout>} />
          <Route path="/watchlist" element={<Layout><Watchlist /></Layout>} />
          <Route path="/downloads" element={<Layout><Downloads /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/browse" element={<Layout><Browse /></Layout>} />



          {/* 404 Route */}
          <Route path="*" element={<Layout><Error404 /></Layout>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
