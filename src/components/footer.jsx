import React from 'react';
import './css/footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="moreinfo">
        <a href="/">Aviso legal</a>
        <a href="/">Politica de privacidad</a>
        <a href="/">Gastos de envio</a>
        <a href="/">Sistemas de pago</a>
        <a href="/">Plazos de entrega</a>
        <a href="/">Devoluciones</a>
      </div>
      <div className="social">
        <a className="circle-icon">
          <i className="fab fa-facebook-f icon"></i>
        </a>
        <a className="circle-icon">
          <i className="fab fa-twitter icon"></i>
        </a>
        <a className="circle-icon">
          <i className="fas fa-wifi icon"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;