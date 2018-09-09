import React from 'react';
import PropTypes from 'prop-types';

const getColor = (status) => {
  switch (status) {
    case 'Considering':
      return 'has-text-warning';
    case 'Rejected':
    case 'Offer Declined':
    case 'No Reply':
      return 'has-text-danger';
    default:
      return 'has-text-success';
  }
};

const ApplicationStatus = (props) => (
  <button
    className={'application-item__status is-pulled-right is-size-7'}
    onClick={() => props.update(props.app)}
  >
    <span className={` ${getColor(props.status)}`}>
      {props.status}
      <span className="application-item__status-update-icon icon is-small">
        <i className="fas fa-sync-alt"></i>
      </span>
    </span>
  </button>

);

ApplicationStatus.propTypes = {
  update: PropTypes.func,
  status: PropTypes.string,
  app: PropTypes.object
};

export default ApplicationStatus;
