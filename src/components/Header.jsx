import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../css/header.css';
import logo from '../img/logo.png';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/usersSlice'; 

function Header({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
 const handleLogout = () => {
  localStorage.removeItem('islogin')
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  dispatch(logout());
  navigate('/login');
  window.location.reload();
 }

  return (
    <header>
      <div className='container flexSB' style={{ padding: "0px 0px" }}>
        <nav className='flexSB'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <ul className='flexSB'>
            <Link to={'/'} className='headerButton'>Home</Link>
            <Link to={'/series'} className='headerButton'>Series</Link>
          </ul>
        </nav>
        <div className='flexSB' style={{ marginRight: "10px" }}>
          <div>
          <input 
            type="text" 
            placeholder='Search Movies..' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ color: "#fff", backgroundColor: "black", border: "none", outline: "none", padding: '10px', width: '170px' }} 
          />
          <a href="" className='headerİcon'><i className='fa fa-search'></i></a>
          </div>
         
          <div className='icons flexRow' style={{marginLeft:"20px"}}>
          <a href="#" onClick={handleLogout}><i className="fa-solid fa-arrow-left" style={{ color: "#ffffff" }}></i></a>
          <a href=""><i className="fa-solid fa-bell" style={{color: "#ffffff"}}></i></a>
          <a href=""><i className="fa-solid fa-user" style={{color: "#ffffff"}}></i></a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;