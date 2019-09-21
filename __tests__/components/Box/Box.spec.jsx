import React from 'react';
import { shallow } from 'enzyme';
import Box from '../../../src/components/Box';

describe('Box', () => {
  it('should render as a component', () => {
    const renderedButton = shallow(<Box />);
    expect(renderedButton).toMatchSnapshot();
  });
});
