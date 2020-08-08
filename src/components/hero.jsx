import React from 'react'
import './css/hero.css';
import DotNav from './dotNav.jsx';

const Hero = () => (
  <section className="hero">
    <div className="hero__carrousel">
      <img className="hero__image" src="https://i.ibb.co/WVkNZyN/hero03.jpg" alt="hero image" />
      <DotNav />
    </div>
  </section>
);

export default Hero;