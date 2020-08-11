import React from 'react'
import { mount } from 'enzyme';
import Header from '../../components/header.jsx'

describe('header section test component', () => {
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
  const header = mount(<Header props={state} />);
  test("component render", () => {
    expect(header.length).toEqual(1);
  });
});