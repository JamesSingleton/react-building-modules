import React from 'react';
import { mount } from 'enzyme';
import Heading from '../../../src/components/Heading';

describe('Heading', () => {
  it('should render as an H1', () => {
    const props = {
      appearance: 'H1',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
  it('should render as an H2', () => {
    const props = {
      appearance: 'H2',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
  it('should render as an H3', () => {
    const props = {
      appearance: 'H3',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
  it('should render as an H4', () => {
    const props = {
      appearance: 'H4',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
  it('should render as an H5', () => {
    const props = {
      appearance: 'H5',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
  it('should render as an H6', () => {
    const props = {
      appearance: 'H6',
    };
    const renderedHeading = mount(<Heading {...props}>Hello World</Heading>);
    expect(renderedHeading).toMatchSnapshot();
  });
});
