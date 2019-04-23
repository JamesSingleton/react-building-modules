import React from 'react';
import { mount } from 'enzyme';
import Divider from '../../../../src/components/Card/Divider';

describe('Divider', () => {
  it('should render', () => {
    const renderedDivider = mount(<Divider />);
    expect(renderedDivider).toMatchSnapshot();
  });
});
