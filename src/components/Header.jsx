import React from 'react';
import { Link } from "react-router-dom";
import '../css/header.css';
import logo from '../img/logo.png';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <header>
      <div className='container flexSB' style={{ padding: "0px 0px" }}>
        <nav className='flexSB'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <ul className='flexSB'>
            <Link to={'/'}>Home</Link>
            <Link to={'/series'}>Series</Link>
          </ul>
        </nav>
        <div className='' style={{ marginRight: "10px", backgroundColor: "black" }}>
          <input 
            type="text" 
            placeholder='Search Movies..' 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ color: "#fff", backgroundColor: "black", border: "none", outline: "none", padding: '10px', width: '200px' }} 
          />
          <a href=""><i className='fa fa-search'></i></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
