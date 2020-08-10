import React from 'react'
import { mount } from 'enzyme';
import PagesNav from '../../components/pagesNav.jsx'

describe('pages menu test component', () => {
  test("component render", () => {
    const pagesNav = mount(<PagesNav />);
    expect(pagesNav.length).toEqual(1);
  });
});