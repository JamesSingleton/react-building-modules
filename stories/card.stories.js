import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card';
import Header from '../src/components/Card/Header'

storiesOf('Card')
  .add('with text', () => (
    <Card onClick={action('clicked')}>Hello Button</Card>
  ))
  .add('with header', () => (
    <Card>
      <Header title="Test" />
    </Card>
  ))
