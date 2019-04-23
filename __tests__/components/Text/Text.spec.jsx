import React from 'react';
import { mount } from 'enzyme';
import Text from '../../../src/components/Text';

describe('Text', () => {
  it('should render as a span', () => {
    const props = {
      tagName: 'span',
    };
    const renderedText = mount(<Text {...props}>Hello Span</Text>);
    expect(renderedText).toMatchSnapshot();
  });
  it('renders a small text component', () => {
    const props = {
      size: 'small',
    };
    const renderedText = mount(<Text {...props}>Hello Small Span</Text>);
    expect(renderedText).toMatchSnapshot();
  });
  it('renders a tiny text component', () => {
    const props = {
      size: 'tiny',
    };
    const renderedText = mount(<Text {...props}>Hello Tiny Span</Text>);
    expect(renderedText).toMatchSnapshot();
  });
});
