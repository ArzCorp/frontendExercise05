import React from 'react'
import { mount } from 'enzyme';
import Hero from '../../components/hero.jsx'

describe('Hero section test', () => {
  test("component render", () => {
    const hero = mount(<Hero />);
    expect(hero.length).toEqual(1);
  });
});