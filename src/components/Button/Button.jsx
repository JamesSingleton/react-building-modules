import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Loader from '../Loader';

const StyledButton = styled.button`
  border-radius: 5px;
  background-color: ${(props) => (props.secondary ? '#F7A072' : '#006fcf')};
  color: #fff;
  padding: 10px 15px;
  font-size: ${(props) => {
    if (props.big) return '20px';
    return '16px';
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  border: 2px solid ${(props) => (props.secondary ? '#F7A072' : '#006fcf')};
  ${(props) => props.inverse
    && css`
      background-color: #fff;
      color: #006fcf;
    `}
`;

const Button = ({
  secondary, big, inverse, loading, children, ...props
}) => (
  <StyledButton secondary={secondary} big={big} inverse={inverse} {...props}>
    {loading ? <Loader small={true} white={true} /> : children}
  </StyledButton>
);

Button.propTypes = {
  secondary: PropTypes.bool,
  big: PropTypes.bool,
  inverse: PropTypes.bool,
  loading: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  secondary: false,
  big: false,
  inverse: false,
  loading: false,
};

export default Button;
