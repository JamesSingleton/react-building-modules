import React from 'react';
import { mount } from 'enzyme';
import Button from '../../../src/components/Button';

describe('Button', () => {
  it('should render as a component', () => {
    mount(<Button>Hello World</Button>);
  });
});
