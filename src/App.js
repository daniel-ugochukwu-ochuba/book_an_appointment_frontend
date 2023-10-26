import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Houses from './components/houses';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/houses" element={<Houses />} />
      </Routes>
      <div className="container">
        <h1>House Rental</h1>
      </div>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
