import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const APPEARANCES = {
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  H5: 'H5',
  H6: 'H6',
};

// eslint-disable-next-line no-unused-vars
const StyledH1 = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  color: #162d3d;
`;

const StyledH2 = styled.h2`
  font-size: 1.75rem;
  line-height: 2rem;
  color: #162d3d;
`;

const StyledH3 = styled.h3`
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: #162d3d;
`;

const StyledH4 = styled.h4`
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #162d3d;
`;

const StyledH5 = styled.h5`
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: #32536a;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const StyledH6 = styled.h6`
  font-size: 0.625rem;
  line-height: 1.125rem;
  color: #162d3d;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Heading = ({ appearance, children, ...rest }) => {
  const { dataHook, ...headingProps } = rest;
  if (appearance.toLowerCase() === 'h2') {
    return <StyledH2 {...headingProps}>{children}</StyledH2>;
  }
  if (appearance.toLowerCase() === 'h3') {
    return <StyledH3 {...headingProps}>{children}</StyledH3>;
  }
  if (appearance.toLowerCase() === 'h4') {
    return <StyledH4 {...headingProps}>{children}</StyledH4>;
  }
  if (appearance.toLowerCase() === 'h5') {
    return <StyledH5 {...headingProps}>{children}</StyledH5>;
  }
  if (appearance.toLowerCase() === 'h6') {
    return <StyledH6 {...headingProps}>{children}</StyledH6>;
  }
  return <StyledH1 {...headingProps}>{children}</StyledH1>;
};

Heading.propTypes = {
  children: PropTypes.oneOf([
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
