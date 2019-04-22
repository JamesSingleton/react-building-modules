import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ tagName: Tag, children }) => <Tag>{children}</Tag>;

Text.propTypes = {
  tagName: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]).isRequired
};

Text.defaultProps = {
  tagName: 'span'
};

export default Text;
