import React from 'react';
import { mount } from 'enzyme';
import Text from '../../../src/components/Text';

describe('Text', () => {
  it('should render as a span', () => {
    const props = {
      tagName: 'span',
    };
    const renderedHeading = mount(<Text {...props}>Hello Span</Text>);
    expect(renderedHeading).toMatchSnapshot();
  });
});
