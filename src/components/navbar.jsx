import React from 'react';
import './css/navbar.css'

const Navbar = () => {

  const count = () => {
    alert('hola');
  }

  return (
    <div className="navbar">
      <a className="button" onClick={count}>Ayuda</a>
      <a className="button" onClick={count}>Nuestras tiendas</a>
      <a className="button" onClick={count}>Contacto</a>
    </div>
  )
};

export default Navbar;