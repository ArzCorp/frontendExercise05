import React from 'react';
import './css/bestSeller.css';
import Categories from './categories.jsx';
import PagesNav from './pagesNav.jsx';

const BestSeller = (props) => {

  const articles = props.props.data
  console.log(articles)
  const putArticles = articles.map((article) => {
    return (
      <div className="article-card" key={article.id}>
        <p>{article.type}</p>
        <img src={article.url} alt={article.type} className="article-card__image" />
        <div className="article-card__buy">
          <button className="button-buy">Comprar</button>
          <p>{article.price}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="bestseller">
      <div className="container">
        <div className="bestseller__categories">
          <Categories />
        </div>
        <div className="bestseller__articles">
          <h1>Articulos mas vendidos</h1>
          <input type="text" placeholder="Ordenar por:" />
          <div className="articles-cards">
            {putArticles}
          </div>
          <PagesNav />
        </div>
      </div>
    </section>
  );
}

export default BestSeller;