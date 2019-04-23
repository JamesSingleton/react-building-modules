import React from 'react';
import { mount } from 'enzyme';
import Card from '../../../src/components/Card';

describe('Card', () => {
  it('should renders the Card', () => {
    const renderedCard = mount(<Card><div>Hello Span</div></Card>);
    expect(renderedCard).toMatchSnapshot();
  });
  it('Stretches Vertically', () => {
    const props = {
      stretchVertically: true,
    };
    const renderedCard = mount(<Card {...props}><div>Hello Span</div></Card>);
    expect(renderedCard).toMatchSnapshot();
  });
});
