import React, { Fragment, Component } from 'react';
import Header from './components/header.jsx'
import Hero from './components/hero.jsx';
import Menu from './components/menu.jsx';
import Featured from './components/featured.jsx';
import BestSeller from './components/bestSeller.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          url: 'https://i.ibb.co/1zNpL7J/chamarra03.jpg',
          id: 1,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/B4M9gkf/casco04.jpg',
          id: 2,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/QbbQLzb/guantes05.jpg',
          id: 3,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/c2TQmVz/chamarra.jpg',
          id: 4,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/MgVJb2f/casco03.jpg',
          id: 5,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/F3nLT2h/guantes03.jpg',
          id: 6,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/BzdfYmD/chamarra01.jpg',
          id: 7,
          type: 'Chaqueta',
          price: '$80.00'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 8,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/8xZLDbL/guantes01.jpg',
          id: 9,
          type: 'Guantes',
          price: '$20.00'
        },
        {
          url: 'https://i.ibb.co/YTQqcFb/botas04.jpg',
          id: 10,
          type: 'Botas',
          price: '$30.00'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 11,
          type: 'Casco',
          price: '$50.00'
        },
        {
          url: 'https://i.ibb.co/fSQsgyH/guantes02.jpg',
          id: 12,
          type: 'Guantes',
          price: '$20.00'
        },
      ],
      count: 0,
    }
  }
  render() {
    return (
      <Fragment>
        <Header />
        <Hero />
        <Menu />
        <Featured props={this.state} />
        <BestSeller props={this.state} />
      </Fragment>
    )
  }
};

export default App;