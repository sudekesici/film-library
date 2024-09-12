import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './css/sidebar.css';
import LoginPage from './pages/LoginPage';
import HomeLayout from './components/HomeLayout';
import CardsPage from './pages/CardsPage';
import Moviedetails from './pages/Moviedetails';


function App() {
  
  const [searchTermSidebar, setSearchTermSidebar] = useState('');
  const [searchTermHeader, setSearchTermHeader] = useState('');



  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />

        
        <Route path="/home" element={<HomeLayout searchTermSidebar={searchTermSidebar} setSearchTermSidebar={setSearchTermSidebar} searchTermHeader={searchTermHeader} setSearchTermHeader={setSearchTermHeader} />} >
          
          <Route index element={<CardsPage />} />
         
          <Route path="movie-details/:id" element={<Moviedetails />} />
        </Route>

        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
