import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home'; 
import Movie from './pages/Moviedetails';
import './App.css'

function App() {
  const { movies} = useSelector((state) => state.movies);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection:'column' ,height: '100vh' }}>
        <Header />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>

          <div className='sidebarvesearch'>
          <input type="text" placeholder="Bir şeyler yaz.." style= {{color: "rgb(255, 255, 255)",backgroundColor: "black", border: "none",outline: "none" ,width: "250px",margin: "24px 20px",padding: "10px"}}/>
            <Sidebar />
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/movie-details" element={<Movie/>} />

            </Routes>
          </div>

        </div>
      </div>
    </Router>
  );
}

export default App;
