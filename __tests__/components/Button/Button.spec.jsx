import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../src/components/Button';

describe('Button', () => {
  it('should render as a component', () => {
    const renderedButton = mount(<Button>Hello World</Button>);
    expect(renderedButton).toMatchSnapshot();
  });
  it('Secondary Button', () => {
    const props = {
      secondary: true,
    };
    const renderedButton = mount(<Button {...props}>Secondary Button</Button>);
    expect(renderedButton).toMatchSnapshot();
  });
  it('Big Button', () => {
    const props = {
      big: true,
    };
    const renderedButton = mount(<Button {...props}>Secondary Button</Button>);
    expect(renderedButton).toMatchSnapshot();
  });
  it('Inverse Button', () => {
    const props = {
      inverse: true,
    };
    const renderedButton = mount(<Button {...props}>Secondary Button</Button>);
    expect(renderedButton).toMatchSnapshot();
  });
  it('Loading Button', () => {
    const props = {
      loading: true,
    };
    const renderedButton = mount(<Button {...props}>Secondary Button</Button>);
    expect(renderedButton).toMatchSnapshot();
  });
});
