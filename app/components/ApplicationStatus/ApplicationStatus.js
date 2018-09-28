import React from 'react';
import PropTypes from 'prop-types';

const getColor = (status) => {
  switch (status) {
    case 'Considering':
      return 'text-yellow';
    case 'Rejected':
    case 'Offer Declined':
    case 'No Reply':
      return 'text-red';
    default:
      return 'text-green';
  }
};

const ApplicationStatus = (props) => (
  <button
    className={'application-item__status float-right text-xs'}
    onClick={() => props.update(props.app)}
  >
    <span className={`${getColor(props.status)}`}>
      {props.status}
      <span className="application-item__status-update-icon icon ml-2">
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
