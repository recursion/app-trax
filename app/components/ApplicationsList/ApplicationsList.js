import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItem from 'containers/ApplicationItem';
import './style.scss';

const ApplicationsList = (props) => (
  <ul className="applications-list container">
    {props.apps.map((app) => (
      <ApplicationItem
        key={app.id}
        update={props.update}
        app={app}
        viewHistory={props.viewHistory}
      />
    ))}
  </ul>
);

ApplicationsList.propTypes = {
  apps: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  viewHistory: PropTypes.func
};

export default ApplicationsList;
