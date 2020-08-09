import React from 'react'
import './css/Featured.css';

const Featured = (props) => {

  const data = props.props.data;
  const onlyHelmet = data.filter((data) => {
    return data.type === 'Casco';
  });
  const helmets = onlyHelmet.slice(0, 4);

  const putData = helmets.map((helmet) => {
    return (
      <div key={helmet.id} className="article">
        <img src={helmet.url} alt={helmet.type} className="article__image" />
        <p>{helmet.type}</p>
      </div>
    )
  });

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__articles">
          <h1>Articulos destacados</h1>
          <div className="articles">
            {putData}
          </div>
        </div>
        <div className="featured__brands">
          <h1>Marcas mas vendidas</h1>
          <img src="https://i.ibb.co/MBjxsSL/marca01.jpg" alt="marca" className="brands__image" />
        </div>
      </div>
    </section>
  )
};

export default Featured;