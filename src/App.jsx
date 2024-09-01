import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; 
import Movie from './pages/Moviedetails';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie-details" element={<Movie/>} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
