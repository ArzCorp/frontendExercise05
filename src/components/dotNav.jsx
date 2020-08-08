import React from 'react';
import './css/dotNav.css';

const DotNav = () => {

  const nextImage = () => {
    alert('Hola');
  };

  return (
    <div className="dotnav">
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
      <i class="fas fa-circle icon" onClick={nextImage}></i>
    </div>
  )
};

export default DotNav;