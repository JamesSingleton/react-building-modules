import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../src/components/Card';

storiesOf('Card')
  .add('with text', () => (
    <Card onClick={action('clicked')}>Hello Button</Card>
  ));
