import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApplicationItemControls = (props) => (
  <span className="application-item__controls p-2 text-xs">
    {
      (props.itemState.length > 1) &&
      <button
        className="application-item__history-button text-blue hover-blue-darker mr-2"
        onClick={() => props.viewHistory(props.app)}
      >
        <span className="icon">
          <i className="fas fa-history"></i>
        </span>
      </button>
    }
    <Link
      className="text-blue hover-blue-darker"
      to={`/applications/edit/${props.app.id}`}
    >
      <span className="icon">
        <i className="fas fa-edit"></i>
      </span>
    </Link>
  </span>
);

ApplicationItemControls.propTypes = {
  itemState: PropTypes.array,
  app: PropTypes.object,
  viewHistory: PropTypes.func
};

export default ApplicationItemControls;
