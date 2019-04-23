import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Heading from '../src/components/Heading'

storiesOf('Heading')
  .add('Heading', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Heading>H1 Heading</Heading>
      <Heading appearance="H2">H2 Heading</Heading>
      <Heading appearance="H3">H3 Heading</Heading>
      <Heading appearance="H4">H4 Heading</Heading>
      <Heading appearance="H5">H5 Heading</Heading>
      <Heading appearance="H6">H6 Heading</Heading>
    </div>
  ))
