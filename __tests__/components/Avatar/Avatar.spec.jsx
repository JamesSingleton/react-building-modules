import React from 'react';
import { mount } from 'enzyme';
import Avatar from '../../../src/components/Avatar';

describe('Avatar', () => {
  it('should render a small avatar', () => {
    const props = {
      size: 'small',
      name: 'JS',
      color: 'red',
    };
    const renderedAvatar = mount(<Avatar {...props} />);
    expect(renderedAvatar).toMatchSnapshot();
  });
  it('should render a medium avatar', () => {
    const props = {
      name: 'JS',
      color: 'green',
    };
    const renderedAvatar = mount(<Avatar {...props} />);
    expect(renderedAvatar).toMatchSnapshot();
  });
  it('should render a large avatar', () => {
    const props = {
      size: 'large',
      name: 'JS',
      color: 'blue',
    };
    const renderedAvatar = mount(<Avatar {...props} />);
    expect(renderedAvatar).toMatchSnapshot();
  });
  it('should render a purple avatar', () => {
    const props = {
      name: 'JS',
      color: 'purple',
    };
    const renderedAvatar = mount(<Avatar {...props} />);
    expect(renderedAvatar).toMatchSnapshot();
  });
  it('should render a orange avatar', () => {
    const props = {
      name: 'JS',
      color: 'orange',
    };
    const renderedAvatar = mount(<Avatar {...props} />);
    expect(renderedAvatar).toMatchSnapshot();
  });
});
