import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TextInput from '../src/components/TextInput';

storiesOf('Text Input').add('default', () => (
  <div style={{ background: '#F0F4F7', padding: 30 }}>
    <TextInput id="helloWorld" onChange={() => console.log('Hello World')} />
  </div>
));
