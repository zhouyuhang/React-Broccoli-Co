import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/Header';

describe('<App />', () => {
  it('should return true',() => {
    expect(true).toBe(true);
  }),
  it('should has <Header />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
