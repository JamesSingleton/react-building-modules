import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCard = styled.div`
  background: #ffffff;
  border-radius: 0.5rem;
  ${(props) => props.stretchVertically
    && css`
      height: 100%;
      flex-grow: 1;
    `}
  ${(props) => props.hideOverflow
    && css`
      overflow: hidden;
    `}
`;

const Card = ({
  stretchVertically, hideOverflow, className, children,
}) => (
  <StyledCard
    stretchVertically={stretchVertically}
    hideOverflow={hideOverflow}
    className={className}
  >
    {children}
  </StyledCard>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  stretchVertically: PropTypes.bool,
  hideOverflow: PropTypes.bool,
  className: PropTypes.string,
};

Card.defaultProps = {
  stretchVertically: false,
  hideOverflow: true,
  className: '',
};

export default Card;
