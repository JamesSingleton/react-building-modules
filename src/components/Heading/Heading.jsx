import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
};

const StyledHeading = styled.h1`
font-size: ${(props) => {
    if (props.as === 'h2') return '1.75rem';
    if (props.as === 'h3') return '1.25rem';
    if (props.as === 'h4') return '1.125rem';
    if (props.as === 'h5') return '0.75rem';
    if (props.as === 'h6') return '0.625rem';
    return '2rem';
  }}
line-height: ${(props) => {
    if (props.as === 'h2') return '2rem';
    if (props.as === 'h3') return '1.5rem';
    if (props.as === 'h4') return '1.5rem';
    if (props.as === 'h5') return '1.5rem';
    if (props.as === 'h6') return '1.125rem';
    return '3rem';
  }};
color: #162d3d;
${props => (props.as === 'h5' || props.as === 'h6')
  && css`
  text-transform: uppercase;
  letter-spacing: 1px;
  `}
`;

const Heading = ({ appearance, children, ...rest }) => {
  const { dataHook, ...headingProps } = rest;
  return <StyledHeading as={appearance.toLowerCase()} {...headingProps}>{children}</StyledHeading>;
};

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  appearance: PropTypes.oneOf(Object.keys(APPEARANCES)),
};

Heading.defaultProps = {
  appearance: APPEARANCES.H1,
};

export default Heading;
