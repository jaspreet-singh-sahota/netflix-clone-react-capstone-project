import React from 'react';
import { shallow } from 'enzyme';
import App from '../container/App';
import BillboardRow from '../components/billboard-row/BillboardRow';
import RowContainer from '../container/row-container/RowContainer';

describe('App', () => {
  it('should render a <BillboardRow /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BillboardRow)).toHaveLength(1);
  });

  it('should render a <BillboardRow /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(RowContainer)).toHaveLength(1);
  });

  it('matches App snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
