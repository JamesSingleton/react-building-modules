import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Badge from '../src/components/Badge';

storiesOf('Badge')
  .add('Small Badge', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Badge onClick={action('clicked')} size="small" text="Hello World" />
      <Badge onClick={action('clicked')} size="small" skin="standard" text="Hello World" />
      <Badge onClick={action('clicked')} size="small" skin="danger" text="Hello World" />
      <Badge onClick={action('clicked')} size="small" skin="success" text="Hello World" />
      <Badge onClick={action('clicked')} size="small" skin="warning" text="Hello World" />
      <Badge onClick={action('clicked')} size="small" skin="premium" text="Hello World" />
    </div>
  ))
  .add('Medium Badge', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Badge onClick={action('clicked')} text="Hello World" />
      <Badge onClick={action('clicked')} skin="standard" text="Hello World" />
      <Badge onClick={action('clicked')} skin="danger" text="Hello World" />
      <Badge onClick={action('clicked')} skin="success" text="Hello World" />
      <Badge onClick={action('clicked')} skin="warning" text="Hello World" />
      <Badge onClick={action('clicked')} skin="premium" text="Hello World" />
    </div>
  ))
  .add('Outlined Badge', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Badge onClick={action('clicked')} type="outlined" text="Hello World" />
      <Badge onClick={action('clicked')} type="outlined" skin="standard" text="Hello World" />
      <Badge onClick={action('clicked')} type="outlined" skin="danger" text="Hello World" />
      <Badge onClick={action('clicked')} type="outlined" skin="success" text="Hello World" />
      <Badge onClick={action('clicked')} type="outlined" skin="warning" text="Hello World" />
      <Badge onClick={action('clicked')} type="outlined" skin="premium" text="Hello World" />
    </div>
  ));
