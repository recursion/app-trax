import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApplicationItemControls = (props) => (
  <span className="application-item__controls">
    <Link
      className="router-link is-pulled-right is-small"
      to={`/applications/edit/${props.app.id}`}
    >
      <span className="icon is-size-7">
        <i className="fas fa-edit"></i>
      </span>
    </Link>
    {
      (props.itemState.length > 1) &&
      <button
        className="application-item__history-button"
        onClick={() => props.viewHistory(props.app)}
      >
        <span className="icon is-size-7 has-text-link">
          <i className="fas fa-history"></i>
        </span>
      </button>
    }
  </span>
);

ApplicationItemControls.propTypes = {
  itemState: PropTypes.array,
  app: PropTypes.object,
  viewHistory: PropTypes.func
};

export default ApplicationItemControls;
