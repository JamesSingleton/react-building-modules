import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  _getChildName = children =>
    children.type && (children.type.displayName || children.type.name);

  render() {
    const { children } = this.props;

    return (
      <div
        className={
          this._getChildName(children) === 'EmptyState'
            ? styles.emptyStateContent
            : styles.root
        }
      >
        {children}
      </div>
    );
  }
}

Content.propTypes = {
  children: PropTypes.node.isRequired
};

export default Content;
