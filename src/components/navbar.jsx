import React from 'react';
import './css/navbar.css'

const Navbar = (props) => {

  const handleChange = props.props

  return (
    <div className="navbar">
      <a className="button" onClick={handleChange}>Ayuda</a>
      <a className="button" onClick={handleChange}>Nuestras tiendas</a>
      <a className="button" onClick={handleChange}>Contacto</a>
    </div>
  )
};

export default Navbar;