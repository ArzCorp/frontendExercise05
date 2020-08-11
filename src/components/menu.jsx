import React from 'react';
import './css/menu.css';

const Menu = (props) => {

  const handleChange = props.props.f

  return (
    <section className="menu">
      <div className="container">
        <a className="button" onClick={handleChange}>Inicio</a>
        <a className="button" onClick={handleChange}>Carretera</a>
        <a className="button" onClick={handleChange}>Ciudad</a>
        <a className="button" onClick={handleChange}>Of road</a>
        <a className="button" onClick={handleChange}>Traid</a>
        <a className="button" onClick={handleChange}>Casual</a>
        <a className="button" onClick={handleChange}>Accesorios</a>
      </div>
    </section>
  );
};

export default Menu;