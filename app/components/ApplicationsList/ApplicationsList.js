import React from 'react';
import PropTypes from 'prop-types';
import ApplicationItem from 'containers/ApplicationItem';

const ApplicationsList = (props) => (
  <ul>
    {props.apps.map((app) => (<ApplicationItem key={app.company} {...app} />))}
  </ul>
);

ApplicationsList.propTypes = {
  apps: PropTypes.array
};

export default ApplicationsList;
