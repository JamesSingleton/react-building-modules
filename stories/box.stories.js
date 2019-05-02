import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StyledBox from '../src/components/Box';

storiesOf('Box').add('test', () => (
  <StyledBox px={[3, 4]} py={[5, 6]} color="white" bg="blue">
    Hello Box
  </StyledBox>
));
