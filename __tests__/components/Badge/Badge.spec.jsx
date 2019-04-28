import React from 'react';
import { mount } from 'enzyme';
import Badge from '../../../src/components/Badge';

describe('Badge', () => {
  it('should render without crashing', () => {
    const props = {
      text: 'Hello World',
      onClick: jest.fn(),
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders a small Badge component', () => {
    const props = {
      size: 'small',
      text: 'Hello World',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders a medium Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders an outlined Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders an outlined standard Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
      skin: 'standard',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });

  it('renders an outlined danger Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
      skin: 'danger',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders an outlined success Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
      skin: 'success',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders an outlined warning Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
      skin: 'warning',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
  it('renders an outlined premium Badge component', () => {
    const props = {
      size: 'medium',
      text: 'Hello World',
      type: 'outlined',
      skin: 'premium',
    };
    const renderedBadge = mount(<Badge {...props} />);
    expect(renderedBadge).toMatchSnapshot();
  });
});
