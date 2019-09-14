import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Text from '../src/components/Text';

storiesOf('Text')
  .add('Span', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Text>This is a span</Text>
    </div>
  ))
  .add('Link', () => (
    <div style={{ background: '#F0F4F7', padding: 30 }}>
      <Text dataHook="storybook-text-link">
        Text component applies link styles to anchor elements that are
        {' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"
          target="_blank"
          rel="noopener noreferrer"
        >
          direct children
        </a>
        {' '}
        only
        <br />
        <span>
          <a href="https://www.wix.com" target="_blank" rel="noopener noreferrer">
            Nested anchors
          </a>
        </span>
        {' '}
        are not styled (what you see is the default browser styles)
      </Text>
    </div>
  ));
