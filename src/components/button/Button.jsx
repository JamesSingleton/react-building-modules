import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  border-radius: 0.5rem;
  color: #ffffff;
  background: #006fcf;
  padding: 0.5rem 0.9375rem;
  border: none;
  outline: none;
`;

const Button = props => {
  const { children } = props;
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired
};

export default Button;
