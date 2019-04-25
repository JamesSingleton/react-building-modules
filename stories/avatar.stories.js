import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Avatar from '../src/components/Avatar';

storiesOf('Avatar')
  .add('with text', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Avatar size="small" color="red" name="JS"/>
      <Avatar size="medium" color="green" name="JS"/>
      <Avatar size="large" color="blue" name="JS"/>
      <Avatar size="large" color="purple" name="JS"/>
    </div>
  ))
