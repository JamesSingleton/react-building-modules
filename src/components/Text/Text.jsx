import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


export const SIZES = {
  tiny: 'tiny',
  small: 'small',
  medium: 'medium',
};

export const WEIGHTS = {
  thin: 'thin',
  normal: 'normal',
  bold: 'bold',
};

const StyledText = styled.span`
font-size: ${(props) => {
    if (props.size === SIZES.small) return '0.875rem';
    if (props.size === SIZES.tiny) return '0.75rem';
    return '1rem';
  }}
line-height: ${(props) => {
    if (props.size === SIZES.small) return '1.125rem';
    if (props.size === SIZES.tiny) return '0.9375rem';
    return '1.5rem';
  }}
  & > a {
    color: #3899EC;
    text-decoration: none;
    &:hover {
      color: #4EB7F5;
    }
  }
`;

const Text = ({
  tagName, size, secondary, weight, children,
}) => (
  <StyledText as={tagName} size={size} secondary={secondary} weight={weight}>
    {children}
  </StyledText>
);

Text.propTypes = {
  tagName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  secondary: PropTypes.bool,
  weight: PropTypes.oneOf(Object.keys(WEIGHTS)),
};

Text.defaultProps = {
  tagName: 'span',
  size: SIZES.medium,
  secondary: false,
  weight: WEIGHTS.thin,
};

export default Text;
