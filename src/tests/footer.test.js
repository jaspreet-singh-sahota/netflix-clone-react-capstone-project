import React from 'react';
import { shallow } from 'enzyme';
import {
  ImFacebook2, ImInstagram, ImTwitter, ImYoutube,
} from 'react-icons/im';
import Footer from '../components/footer/Footer';

describe('Footer', () => {
  it('should render a facebook icon', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(ImInstagram)).toHaveLength(1);
  });

  it('should render a instagram icon', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(ImFacebook2)).toHaveLength(1);
  });

  it('should render a Twitter icon', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(ImTwitter)).toHaveLength(1);
  });

  it('should render a YouTube icon', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find(ImYoutube)).toHaveLength(1);
  });

  it('matches Footer snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
