import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => {
    if (props.size.toLowerCase() === 'large') return '4.5rem';
    if (props.size.toLowerCase() === 'small') return '2.25rem';
    return '3rem';
  }};
  width: ${(props) => {
    if (props.size.toLowerCase() === 'large') return '4.5rem';
    if (props.size.toLowerCase() === 'small') return '2.25rem';
    return '3rem';
  }};
  border-radius: ${(props) => {
    if (props.size.toLowerCase() === 'large') return '2.25rem';
    if (props.size.toLowerCase() === 'small') return '1.3125rem';
    return '1.875rem';
  }};
  background-image: linear-gradient(225deg,#389aec,#4ebcf5);
`;

const StyledName = styled.div`
  color: #ffffff;
  font-size: ${(props) => {
    if (props.size.toLowerCase() === 'large') return '1rem';
    if (props.size.toLowerCase() === 'small') return '0.75rem';
    return '0.875rem';
  }};
  line-height: ${(props) => {
    if (props.size.toLowerCase() === 'large') return '1.5rem';
    if (props.size.toLowerCase() === 'small') return '0.9375rem';
    return '1.125rem';
  }};
`;

const Avatar = ({ name, size, color }) => (
  <StyledAvatar color={color} size={size}>
    <StyledName size={size}>{name}</StyledName>
  </StyledAvatar>
);

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  color: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  size: 'medium',
};

export default Avatar;
