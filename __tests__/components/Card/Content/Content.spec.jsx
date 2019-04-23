import React from 'react';
import { mount } from 'enzyme';
import Content from '../../../../src/components/Card/Content';

describe('Content', () => {
  it('should render', () => {
    const renderedContent = mount(<Content />);
    expect(renderedContent).toMatchSnapshot();
  });
});
