import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItem from 'containers/ApplicationItem';
import './style.scss';

const ApplicationsList = (props) => (
  <ul className="applications-list">
    {props.apps.map((app) => <ApplicationItem key={app.createdAt} {...app} />)}
  </ul>
);

ApplicationsList.propTypes = {
  apps: PropTypes.array
};

export default ApplicationsList;
