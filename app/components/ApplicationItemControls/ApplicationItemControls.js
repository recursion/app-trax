import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ApplicationItemControls = (props) => (
  <span className="application-item__controls">
    <Link
      className="router-link is-pulled-right is-small"
      to={`/applications/edit/${props.app.createdAt}`}
    >
      <span className="icon is-size-7">
        <i className="fas fa-edit"></i>
      </span>
    </Link>
    {
      (props.itemState.length > 1) ?
        <Link
          className="router-link is-pulled-right is-small"
          to={`/applications/history/${props.app.createdAt}`}
        >
          <span className="icon is-size-7">
            <i className="fas fa-history"></i>
          </span>
        </Link> : ''
    }
  </span>
);

ApplicationItemControls.propTypes = {
  itemState: PropTypes.array,
  app: PropTypes.object
};

export default ApplicationItemControls;
