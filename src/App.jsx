import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './css/sidebar.css';
import LoginPage from './pages/LoginPage';
import Moviedetails from './pages/Moviedetails';
import CardsPage from './pages/CardsPage';
import Sidebar from './components/Sidebar'; 
import Header from './components/Header'; 
import { login } from './redux/usersSlice';


function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  const [searchTermSidebar, setSearchTermSidebar] = useState('');
  const [searchTermHeader, setSearchTermHeader] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    
    if (username && password) {
      dispatch(login({ username, password }));
    }
  }, [dispatch]);

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
