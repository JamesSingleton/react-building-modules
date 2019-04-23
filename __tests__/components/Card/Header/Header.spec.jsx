import React from 'react';
import { mount } from 'enzyme';
import Header from '../../../../src/components/Card/Header';

describe('Header', () => {
  it('should render', () => {
    const props = {
      title: 'Some Title',
    };
    const renderedHeader = mount(<Header {...props} />);
    expect(renderedHeader).toMatchSnapshot();
  });
  it('has a none string title', () => {
    const props = {
      title: <span>Hello</span>,
    };
    const renderedHeader = mount(<Header {...props} />);
    expect(renderedHeader).toMatchSnapshot();
  });
  it('has a title and subtitle', () => {
    const props = {
      title: 'Some Title',
      subtitle: 'Some Subtitle',
    };
    const renderedHeader = mount(<Header {...props} />);
    expect(renderedHeader).toMatchSnapshot();
  });
  it('has a title and subtitle and suffix', () => {
    const props = {
      title: 'Some Title',
      subtitle: 'Some Subtitle',
      suffix: 'A Suffix',
    };
    const renderedHeader = mount(<Header {...props} />);
    expect(renderedHeader).toMatchSnapshot();
  });
});
