import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/SideBar';
import Home from './pages/Home'; 
import Movie from './pages/Moviedetails';
import './App.css'
import './css/sidebar.css'

function App() {
  const [searchTermSidebar, setSearchTermSidebar] = useState('');
  const [searchTermHeader, setSearchTermHeader] = useState('');

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header searchTerm={searchTermHeader} setSearchTerm={setSearchTermHeader} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
          
            <Sidebar searchTerm={searchTermSidebar} setSearchTerm={setSearchTermSidebar} />
         
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<Home searchTerm={searchTermHeader} />} />
              <Route path="/movie-details/:id" element={<Movie/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
