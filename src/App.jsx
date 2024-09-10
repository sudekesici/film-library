import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import './css/sidebar.css';
import LoginPage from './pages/LoginPage';
import Moviedetails from './pages/Moviedetails';
import CardsPage from './pages/CardsPage';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import { login } from './redux/usersSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.currentUser);
  const [searchTermSidebar, setSearchTermSidebar] = useState('');
  const [searchTermHeader, setSearchTermHeader] = useState('');

  useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');

    if (isLogin === 'true') {
      const username = localStorage.getItem('username');
      const password = localStorage.getItem('password');
      if (username && password) {
        dispatch(login({ username, password }));
      }
    }
  }, [dispatch]);

  const isLoggedIn = localStorage.getItem('isLogin') === 'true';

  return (
    <Router>
      {isLoggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', paddingTop:"100px"}}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Header searchTerm={searchTermHeader} setSearchTerm={setSearchTermHeader} />
            <Sidebar searchTerm={searchTermSidebar} setSearchTerm={setSearchTermSidebar} />
            <div style={{ marginLeft: '287px', flex: 1, overflowY: 'auto' }}>
              <Routes>
                <Route path="/" element={<CardsPage searchTerm={searchTermHeader} />} />
                <Route path="/movie-details/:id" element={<Moviedetails />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ Height: '100vh' }}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
