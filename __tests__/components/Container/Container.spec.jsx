import React from 'react';
import { mount } from 'enzyme';
import Container from '../../../src/components/Container';

describe('Container', () => {
  it('should render without crashing with just a child passed', () => {
    const renderedContainer = mount(<Container>Hello Span</Container>);
    expect(renderedContainer).toMatchSnapshot();
  });
  it('renders a small Container component', () => {
    const props = {
      small: true,
    };
    const renderedContainer = mount(<Container {...props}>Hello Small Container</Container>);
    expect(renderedContainer).toMatchSnapshot();
  });
  it('renders a full vertical Container component', () => {
    const props = {
      fullVertical: true,
    };
    const renderedContainer = mount(<Container {...props}>Full Vertical Container</Container>);
    expect(renderedContainer).toMatchSnapshot();
  });
  it('renders a full Container component', () => {
    const props = {
      full: true,
    };
    const renderedContainer = mount(<Container {...props}>Full Container</Container>);
    expect(renderedContainer).toMatchSnapshot();
  });
});
