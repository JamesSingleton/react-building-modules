import React from 'react';
import { mount } from 'enzyme';
import Content from '../../../../src/components/Card/Content';

describe('Content', () => {
  it('should render', () => {
    const props = {
      children: 'Hello World',
    };
    const renderedContent = mount(<Content {...props} />);
    expect(renderedContent).toMatchSnapshot();
  });
});
