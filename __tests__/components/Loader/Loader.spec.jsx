import React from 'react';
import { mount } from 'enzyme';
import Loader from '../../../src/components/Loader';

describe('Loader', () => {
  it('renders', () => {
    const renderedLoader = mount(<Loader />);
    expect(renderedLoader).toMatchSnapshot();
  });
  it('renders a big loader', () => {
    const props = {
      big: true,
    };
    const renderedLoader = mount(<Loader {...props} />);
    expect(renderedLoader).toMatchSnapshot();
  });
});
