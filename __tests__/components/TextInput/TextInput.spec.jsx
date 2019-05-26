import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../../../src/components/TextInput';

describe('Text', () => {
  it('renders a small text input component', () => {
    const props = {
      size: 'small',
      id: 'input1',
      onChange: jest.fn(),
      value: 'Input 1',
    };
    const renderedText = shallow(<TextInput {...props} />);
    expect(renderedText).toMatchSnapshot();
  });
  it('renders a large text input component', () => {
    const props = {
      size: 'large',
      id: 'input2',
      onChange: jest.fn(),
      value: 'Input 2',
    };
    const renderedText = shallow(<TextInput {...props} />);
    expect(renderedText).toMatchSnapshot();
  });
});
