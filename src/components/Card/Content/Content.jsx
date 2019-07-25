import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ children }) => (
  <div>{children}</div>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
};

export default Content;
