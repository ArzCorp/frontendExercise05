import React from 'react'
import { mount } from 'enzyme';
import Featured from '../../components/featured.jsx'

describe('featured section test component', () => {
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
  const featured = mount(<Featured props={state} />);
  test("component render", () => {
    expect(featured.length).toEqual(1);
  });
});