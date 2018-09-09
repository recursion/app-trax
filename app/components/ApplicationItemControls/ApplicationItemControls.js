import React from 'react';
import PropTypes from 'prop-types';

const ApplicationItemControls = (props) => (
  <span className="application-item__controls">
    <button onClick={() => props.edit(props.app)}>
      <span className="icon is-size-6">
        <i className="fas fa-edit"></i>
      </span>
    </button>
    {
      (props.itemState.length > 1) ?
        <button className="application-item__history-button">
          <span className="icon is-size-6">
            <i className="fas fa-history"></i>
          </span>
        </button> :
        ''
    }
  </span>
);

ApplicationItemControls.propTypes = {
  itemState: PropTypes.array,
  edit: PropTypes.func,
  app: PropTypes.object
};

export default ApplicationItemControls;
