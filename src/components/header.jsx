import React from 'react';
import './css/header.css'
import Navbar from './navbar.jsx';

const Header = () => (
  <header>
    <div className="logo">
      <h1>MOTOSHOP</h1>
      <i className="fas fa-motorcycle icon"></i>
    </div>
    <Navbar />
  </header>
);

export default Header;