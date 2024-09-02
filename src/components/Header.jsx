import React,{useState} from 'react'
import {Link} from "react-router-dom";
import '../css/header.css'
import logo from '../img/logo.png';

function Header(){
  const [search,setSearch] = useState('false') // Bununla search ikonuna basınca açılır kapanır input alanı yapıcam.
  return (
  <header>
    <div className='container flexSB' style={{padding:"0px 0px"}}>
      <nav className='flexSB'>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>
        <ul className='flexSB '>
          <Link to={'/'}>Home</Link>
          <Link to={'/series'}>Series</Link>
        </ul>
      </nav>
      <div className='flexSB' style={{marginRight:"10px"}}>
        <a href=""><i className='fa fa-search'></i></a>
        <a href=""><i className='fa fa-bell'></i></a> 
        <a href=""><i className='fa fa-user'></i></a>
      </div>
    </div>
  </header>
  );
};

export default Header;
