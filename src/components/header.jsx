import React from 'react';
import './css/header.css'
import Navbar from './navbar.jsx';

const Header = (props) => {

  const handleChange = props.props.f;
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>MOTOSHOP</h1>
          <i className="fas fa-motorcycle icon"></i>
        </div>
        <Navbar props={handleChange} />
      </div>
    </header>
  );
};

export default Header;