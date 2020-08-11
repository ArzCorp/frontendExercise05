import React from 'react'
import { mount } from 'enzyme';
import Menu from '../../components/menu.jsx'

describe('Menu test component', () => {
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
  const menu = mount(<Menu props={state} />);
  test("component render", () => {
    expect(menu.length).toEqual(1);
  });
});