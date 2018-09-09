import React from 'react';
import PropTypes from 'prop-types';

const ApplicationExpansionControl = (props) => (
  <button
    className="application-item__expand-button is-size-5"
    onClick={props.toggleExpand}
  >
    {(props.expanded) ?
      <span className="icon is-size-6">
        <i className="fas fa-minus"></i>
      </span> :
      <span className="icon is-size-6">
        <i className="fas fa-expand-arrows-alt"></i>
      </span>
    }
  </button>
);

ApplicationExpansionControl.propTypes = {
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func
};

export default ApplicationExpansionControl;
