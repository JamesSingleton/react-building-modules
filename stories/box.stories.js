import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Box from '../src/components/Box';

storiesOf('Box')
  .add('with text', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Box width={[1, 1 / 2]} p={4} mb={3} bg="#006fcf">
        This is a blue box, with responsive width, some padding, and margin bottom
      </Box>
    </div>
  ))