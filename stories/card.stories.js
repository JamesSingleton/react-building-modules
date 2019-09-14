import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card';
import Header from '../src/components/Card/Header';

storiesOf('Card')
  .add('with text', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Card onClick={action('clicked')}>Hello Button</Card>
    </div>
  ))
  .add('with header', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Card>
        <Header title="Test" />
      </Card>
    </div>
  ))
  .add('with custom class name', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Card onClick={action('clicked')} className="custom-class">Custom Class Name</Card>
    </div>
  ));
