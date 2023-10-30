import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Houses from './components/houses';
import Login from './components/auth/login';
import Register from './components/auth/register';
import PrivateRoute from './components/auth/private-route';
import './App.css';

function App() {
  return (
    <>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/" element={<PrivateRoute />}>
              <Route path="/houses" element={<Houses />} />
            </Route>
          </Routes>
        </main>
      </>
    </>
  );
}

export default App;
