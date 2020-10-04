import React from 'react';
import { shallow } from 'enzyme';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('Routes', () => {
  it('should render a <Navbar /> component', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });

  it('should render a <Footer /> component', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should render a routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Route)).toHaveLength(7);
  });

  it('should render a BrowserRouter', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });

  it('should render a Switch', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Switch)).toHaveLength(1);
  });

  it('matches Render snapshot', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });
});
