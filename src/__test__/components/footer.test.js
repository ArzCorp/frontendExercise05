import React from 'react'
import { mount } from 'enzyme';
import Footer from '../../components/footer.jsx'

describe('Footer section test', () => {
  test("component render", () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});