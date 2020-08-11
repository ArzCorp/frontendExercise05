import React from 'react'
import { mount } from 'enzyme';
import BestSeller from '../../components/bestSeller.jsx'

describe('best seller section test component', () => {
  const state = {
    f: jest.fn(),
    data: [
      {
        url: 'https://i.ibb.co/1zNpL7J/chamarra03.jpg',
        id: 1,
        type: 'Chaqueta',
        price: '$80.00'
      },
    ]
  }
  const bestSeller = mount(<BestSeller props={state} />);
  test("component render", () => {
    expect(bestSeller.length).toEqual(1);
  });
});