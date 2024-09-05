import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import './css/sidebar.css';
import LoginPage from './pages/LoginPage';
import Moviedetails from './pages/Moviedetails';
import CardsPage from './pages/CardsPage';
import Sidebar from './components/Sidebar'; 
import Header from './components/Header'; 

function App() {
  const user = useSelector((state) => state.users.currentUser);
  const [searchTermSidebar, setSearchTermSidebar] = useState('');
  const [searchTermHeader, setSearchTermHeader] = useState('');

  return (
    <Router>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
     
        {user ? (
           
          <div style={{display: 'flex', flexDirection: 'column' }}>
              <Header searchTerm={searchTermHeader} setSearchTerm={setSearchTermHeader} />
           
            <div style={{display: 'flex', flexDirection: 'row' }}>
          
            <Sidebar searchTerm={searchTermSidebar} setSearchTerm={setSearchTermSidebar} />
              <div style={{ overflowY: 'auto' }}>
                <Routes>
                  <Route path="/" element={<CardsPage searchTerm={searchTermHeader} />} />
                  <Route path="/movie-details/:id" element={<Moviedetails />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
