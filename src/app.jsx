import React, { Fragment, Component } from 'react';
import Header from './components/header.jsx'
import Hero from './components/hero.jsx';
import Menu from './components/menu.jsx';
import BestSeller from './components/bestSeller.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          url: 'https://i.ibb.co/1zNpL7J/chamarra03.jpg',
          id: 1,
          type: 'Chaqueta'
        },
        {
          url: 'https://i.ibb.co/B4M9gkf/casco04.jpg',
          id: 2,
          type: 'Casco'
        },
        {
          url: 'https://i.ibb.co/QbbQLzb/guantes05.jpg',
          id: 3,
          type: 'Guantes'
        },
        {
          url: 'https://i.ibb.co/c2TQmVz/chamarra.jpg',
          id: 4,
          type: 'Chaqueta'
        },
        {
          url: 'https://i.ibb.co/MgVJb2f/casco03.jpg',
          id: 5,
          type: 'Casco'
        },
        {
          url: 'https://i.ibb.co/F3nLT2h/guantes03.jpg',
          id: 6,
          type: 'Guantes'
        },
        {
          url: 'https://i.ibb.co/BzdfYmD/chamarra01.jpg',
          id: 7,
          type: 'Chaqueta'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 8,
          type: 'Casco'
        },
        {
          url: 'https://i.ibb.co/8xZLDbL/guantes01.jpg',
          id: 9,
          type: 'Guantes'
        },
        {
          url: 'https://i.ibb.co/YTQqcFb/botas04.jpg',
          id: 10,
          type: 'Botas'
        },
        {
          url: 'https://i.ibb.co/H467tgV/casco02.jpg',
          id: 11,
          type: 'Casco'
        },
        {
          url: 'https://i.ibb.co/fSQsgyH/guantes02.jpg',
          id: 12,
          type: 'Guantes'
        },
        {
          url: 'https://i.ibb.co/3Rzqnn7/botas02.jpg',
          id: 13,
          type: 'Botas'
        },
        {
          url: 'https://i.ibb.co/y85ZVzg/guantes04.jpg',
          id: 14,
          type: 'Guantes'
        },
        {
          url: 'https://i.ibb.co/jHcqPt9/casco01.jpg',
          id: 15,
          type: 'Casco'
        },
        {
          url: 'https://i.ibb.co/jHcqPt9/casco01.jpg',
          id: 16,
          type: 'Botas'
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
        <BestSeller props={this.state} />
      </Fragment>
    )
  }
};

export default App;