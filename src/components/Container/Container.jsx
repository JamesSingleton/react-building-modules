import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
    padding-left: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};
    padding-right: ${(props) => {
    if (props.full) return 0;
    return 'calc((100vw - 960px) / 2)';
  }};
    padding-top: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};
    padding-bottom: ${(props) => {
    if (props.fullVertical) return 0;
    if (props.small) return '15px';
    return '25px';
  }};
`;

const Container = ({
  fullVertical, full, small, children,
}) => (
  <StyledContainer
    fullVertical={fullVertical}
    full={full}
    small={small}
  >
    {children}
  </StyledContainer>
);

Container.propTypes = {
  fullVertical: PropTypes.bool,
  full: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

Container.defaultProps = {
  fullVertical: false,
  full: false,
  small: false,
};

export default Container;
