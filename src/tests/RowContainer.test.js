import React from 'react';
import { shallow } from 'enzyme';
import RowContainer from '../container/row-container/RowContainer';
import Row from '../components/row/Row';

describe('RowContainer', () => {
  it('should render a <Row /> component', () => {
    const wrapper = shallow(<RowContainer />);
    expect(wrapper.find(Row)).toHaveLength(8);
  });

  it('matches RowContainer snapshot', () => {
    const wrapper = shallow(<RowContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
