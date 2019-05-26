import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const StyledInput = styled.input`
  min-height: 34px;
  padding: 6px 8px;
  font-size: 1rem;
  line-height: 20px;
  color: #24292e;
  vertical-align: middle;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: right 8px center;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  outline: none;
  box-shadow: rgba(27, 31, 35, 0.075) 0px 1px 2px inset;
`;

const TextInput = ({
  size, block, className, ...rest
}) => {
  const classes = classnames(className, 'form-control', {
    'input-block': block,
    'input-sm': size === 'small',
    'input-lg': size === 'large',
  });
  const inputProps = {
    className: classes,
    type: 'text',
    ...rest,
  };
  return <StyledInput {...inputProps} />;
};

TextInput.propTypes = {
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large']),
  value: PropTypes.string.isRequired,
};

TextInput.defaultProps = {
  block: true,
  disabled: false,
  className: '',
  name: '',
  placeholder: 'Placeholder',
  required: false,
  size: 'small',
};

export default TextInput;
