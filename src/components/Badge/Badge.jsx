import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import noop from 'lodash/noop';

const SIZES = {
  small: 'small',
  medium: 'medium',
};

const TYPE = {
  solid: 'solid',
  outlined: 'outlined',
};

const SKIN = {
  general: 'general',
  standard: 'standard',
  danger: 'danger',
  success: 'success',
  warning: 'warning',
  premium: 'premium',
};

const StyledBadge = styled.div`
  cursor: default;
  border: 1px solid;
  border-radius: 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  line-height: 1;
  background-color: ${(props) => {
    if (props.skin === SKIN.standard) return props.theme.standard;
    if (props.skin === SKIN.danger) return props.theme.danger;
    if (props.skin === SKIN.success) return props.theme.success;
    if (props.skin === SKIN.warning) return props.theme.warning;
    if (props.skin === SKIN.premium) return props.theme.premium;
    return props.theme.general;
  }};
  padding: ${(props) => {
    if (props.size === SIZES.small) return '0.125rem 0.375rem';
    return '0.3125rem 0.75rem';
  }}
  color: #fff;
  ${props => props.type === TYPE.outlined
    && css`
      background-color: #fff;
      color: ${() => {
    if (props.skin === SKIN.standard) return props.theme.standard;
    if (props.skin === SKIN.danger) return props.theme.danger;
    if (props.skin === SKIN.success) return props.theme.success;
    if (props.skin === SKIN.warning) return props.theme.warning;
    if (props.skin === SKIN.premium) return props.theme.premium;
    return props.theme.general;
  }};
    `}
`;

StyledBadge.defaultProps = {
  theme: {
    general: '#32536A',
    standard: '#006fcf',
    danger: '#F25C5E',
    success: '#43a34c',
    warning: '#FDB02B',
    premium: '#9B61B3',
  },
};
const StyledText = styled.span`
  font-size: 0.625rem;
  line-height: 0.75rem;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`;

const Badge = ({
  text,
  onClick,
  size,
  ...rest
}) => (
  <StyledBadge onClick={onClick} size={size} {...rest}>
    <StyledText>{text}</StyledText>
  </StyledBadge>
);

Badge.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(SIZES)),
  type: PropTypes.oneOf(Object.keys(TYPE)),
  skin: PropTypes.oneOf(Object.keys(SKIN)),
};

Badge.defaultProps = {
  onClick: noop,
  size: SIZES.medium,
  type: TYPE.solid,
  skin: SKIN.general,
};

export default Badge;
